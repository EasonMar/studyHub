// 管理接口的配置文件, 定义接口有哪些配置
export const config = {
    baseURL: 'https://xxx.host.com',
    // 静态接口请求头
    headers: {
        'x-headers': 'xxx',
    },
    // 动态接口请求头
    headerHandlers: [
        () => Promise.resolve({ 'x-authorization': 'xxxx' }),
        () => Promise.resolve({ 'x-id': 'xxxx' }),
    ],
    // 错误处理函数
    errorHandler: (error) => {
        console.log(error.message);
    },
    // api 列表 - 三种类型
    apis: {
        // 1. 使用路径配置
        getUser: 'GET /api/user',
        // 2. 使用配置文件
        download: {
            method: 'POST',
            // 支持参数占位符
            path: '/api/download/:id',
            // 特殊接口请求
            headers: { 'x-download': 'xxx' }
        },
        // 3. 使用配置函数
        getRes: () => {
            // get cache data
            const res = JSON.parse(window.localStorage.getItem('cache') || 'null');
            return Promise.resolve(res);
        }
    },
};

// 这是一份很基本配置文件，在实际业务使用可以依据需要附加其他配置，如跨域、超时、接口缓存等
// 有了配置文件后，接下来我们可以“加一点”类型支持~ ---> type.ts