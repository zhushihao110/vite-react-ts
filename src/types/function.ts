// 自动推导出 参数类型
export type MyParameters<T> = T extends (...args: infer P) => any ? P : never

// 推断 ReturnType
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
