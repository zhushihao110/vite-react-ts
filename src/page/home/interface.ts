// 定义一个接口（对象） 设置属性类型， ？表示可选属性
// readonly 只读属性， 赋值后，不能再被改变 只读属性必须在声明时或构造函数里被初始化
export interface formItem {
  readonly name: string
  id: string
  age: string
  money?: number
}

// 定义返回数据
export interface result {
  code: number
  list: Array<formItem>
}

// 枚举 通常用来设置常量
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

// 自定义类型接口， 与interface 大部分场景下可以通用
export type constatce = 'type' | 'interface'
export type countType = number

export interface obj {
  name: String
  age: Number
  love?: Array<string>
}

// 可索引类型 支持两种索引签名：字符串和数字
// 定义一个数据对象
export interface arrayList {
  [index: number]: Object
}
