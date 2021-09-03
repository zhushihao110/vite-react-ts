export interface StateType {
  name: string
  count: number
  list: Array<number>
}

export interface PropsType {
  id?: number
  name?: string
  showCount?: (number: number) => void
}
