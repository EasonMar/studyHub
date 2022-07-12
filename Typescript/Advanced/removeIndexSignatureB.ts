// ===== 下面的语法在 TS v3.x.x 时会报错... 说明很多是新版本ts的语法

// `${}`: 模板字符串类型

type RemoveIndexSignature<Obj extends Record<string, any>> = {
  // 对于infer的理解看 infer.ts...所以这里的意思是, 如果Key等于某个字符串...则就取Key这个字符串
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
};



// ===== https://segmentfault.com/q/1010000041790130?utm_source=sf-similar-question ==== 
type FooSecond = {
  [key: string]: any
  foo(): void
}

type RemoveIndexSignatureSecond<T> = {
  [K in keyof T as string extends K ? never : K]: T[K]
  // [K in keyof T as (string extends K ? never : K)]: T[K]
  // 因为 string extends 'foo' 结果为 false，所以取下了'foo':()=>void这一类型。
}

type ASecond = RemoveIndexSignatureSecond<FooSecond> // expected { foo(): void }

type ASecondAbove = RemoveIndexSignature<FooSecond>