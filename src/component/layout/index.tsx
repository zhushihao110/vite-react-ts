import React from 'react'
import { renderRoutes } from 'react-router-config'
import { PropsType } from './interface'

const LayoutBox: React.FC<PropsType> = props => {
  const { route } = props
  return <div>{route && renderRoutes(route.routes)}</div>
}

export default LayoutBox
