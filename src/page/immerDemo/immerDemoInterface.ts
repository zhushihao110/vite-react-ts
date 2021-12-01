export interface PropsType {
  id?: number
}

interface FormItem {
  id: number
  value: string
}
export interface StateType {
  name: string
  age: number
  friends: Array<FormItem>
}
