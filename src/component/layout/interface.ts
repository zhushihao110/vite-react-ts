import { RouteConfigComponentProps } from 'react-router-config'

export interface PropsType extends RouteConfigComponentProps {
  id?: number
  name?: string
  showCount?: (number: number) => void
}
