import { RouteConfigComponentProps } from 'react-router-config'
export interface StateType {
  name: string
  count: number
  list: Array<number>
  flag: Boolean
}

export interface PropsType extends RouteConfigComponentProps {
  id?: number
  name?: string
  showCount?: (number: number) => void
}
