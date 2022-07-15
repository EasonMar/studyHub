import { AxiosRequestHeaders, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// ---------- 首先是 api 列表，api 支持三种配置形式 ---------- 
// 1. 路径配置
export type RequestPath = `${Uppercase<RequestOptions['method']>} ${string}`;

// 2. 选项配置
export type RequestOptions = {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | 'PATCH',
    headers?: AxiosRequestHeaders;
};

// 3. 自定义函数
export type RequestFunction<P = Record<string, any> | void, R = any> = (
    params: P,
    ...args: any[]
) => Promise<R>;


// 所以API是三种类型的联合类型
export type APIConfig = RequestPath | RequestOptions | RequestFunction;
// ------------------------------------------------------------


// ---------- 接着是 headers 处理函数和错误处理函数 ----------
export type HeaderHandler = (config?: AxiosRequestConfig) => Promise<AxiosRequestHeaders>;
export type RequestErrorHandler = (error: AxiosError) => void;
// ------------------------------------------------------------


// ---------- 补充下其他配置项 ---------- 
type RequestConfig = {
    baseURL: string;
    headers?: AxiosRequestHeaders;
    headerHandlers?: Array<HeaderHandler>;
    errorHandler?: RequestErrorHandler;
    apis: Record<string, APIConfig>;
};
// ------------------------------------------------------------

/**
 * 有了配置可以着手请求客户端（调用方）的封装了，那是先写编码实现还是先写类型呢？
 * 建议是先写类型约束，
 * 虽然上面我们我们是从配置开始的，其实在设计配置时我们就可以先设计配置的类型描述，
 * 后面按接口的要求书写配置即可。
 * 
 * 这也是 TS 开发带给我编码方式的改变。在纯 JavaScript 开发过程我可能不会太去关注功能接口约束，
 * 一般可能是写好功能才确定模块的接口，而使用 TS 过程会让我们更加关注接口约束，
 * 即先定义接口后实现功能。
 * 
 * ----------------------------------------------------------------
 * 
 * 在使用请求客户端时我们最关注的东西：
 * 1. 调用接口名
 * 2. 接口入参
 * 3. 接口返回值
 * 
 * 写 JavaScript 使用 api 时我们需要经常翻出接口配置，
 * 在接口传参与返回时可能需要翻看接口文档才知道具体数据格式。
 * 
 * 在 TS 中我们希望可以利用其强大类型推导能力，通过简单的配置实现 api "接口提示" 与 "接口入出参约束"，
 * 一方面也有替代接口文档的作用
 */

// ---------- 需要实现接口名、入参与出参提示，自然需要将他们的配置描述出来 ----------

// APISchema = {接口名: {request: 入参, response: 出参}}
export type APISchema = Record<string, {
    request: Record<string, any> | void;
    response: Record<string, any> | any;
}>;

interface TestAPISchema extends APISchema {
    // 接口名
    getUser: {
        // 入参
        request: {
            id: number;
        };
        // 出参
        response: {
            avatar: string;
            id: number;
            name: string;
        };
    };
}

/**
 * ----------------------------------------------------------------
 * 看一下之前的 api 配置：type RequestConfig = { apis: Record<string, APIConfig>; };
 * 我们使用 Record<string, APIConfig> 来描述 api 配置，正确 但不够准确，
 * 有了 APISchema 配置信息我们可以更加准确的描述配置文件了 
 *  --- 因为可以精准到具体接口名, 此时创建apis可以提示接口名...
 * 
 * 在准确描述配置文件的同时也可以规范配置文件。
 */

type CreateRequestConfigTemp<T extends APISchema> = {
    baseURL: string;
    headers?: AxiosRequestHeaders;
    headerHandlers?: Array<HeaderHandler>;
    errorHandler?: RequestErrorHandler;
    apis: {
        [K in keyof T]: APIConfig;
    };
};

// 使用 schema 创建配置
const configTemp: CreateRequestConfigTemp<TestAPISchema> = {
    baseURL: 'xxx',
    apis: {
        getUser: 'GET /api/user'
    }
}


// 移除 可索引属性的影响 
export type CreateRequestConfig<T extends APISchema> = {
    baseURL: string;
    headers?: AxiosRequestHeaders;
    headerHandlers?: Array<HeaderHandler>;
    errorHandler?: RequestErrorHandler;
    apis: {
        [K in keyof RemoveIndexSignature<T>]: APIConfig;
    };
};

/**
 * ----------------------------------------------------------------
 * 接下来就是描述 api 客户端了，与描述配置文件一样基于 APISchema 创建客户端类型约束。
 * 
 * 如何理解客户端（就是调用方） ---《重构》里有类似概念的描述
 */

type CreateRequestClientTemp<T extends APISchema> = {
    [K in keyof T]: RequestFunction<T[K]['request'], AxiosResponse<T[K]['response']>>;
};


// 具体怎么写 --- 为什么这样可以？
const clientTemp: CreateRequestClientTemp<TestAPISchema> = {
    getUser: () => {
        // get cache data
        const res = JSON.parse(window.localStorage.getItem('cache') || 'null');
        return Promise.resolve(res);
    }
}




// 去除可索引签名 - 创建请求客户端的类型约束
export type CreateRequestClient<T extends APISchema> = {
    [K in keyof RemoveIndexSignature<T>]: RequestFunction<
        RemoveIndexSignature<T>[K]['request'],
        AxiosResponse<RemoveIndexSignature<T>[K]['response']>
    >;
};

/** 去除可索引签名 */
type RemoveIndexSignature<Obj extends Record<string, any>> = {
    [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
};


// 自此我们已经完成了 APISchema 生成配置文件与客户端接口的操作，下面就是具体客户端封装了。
