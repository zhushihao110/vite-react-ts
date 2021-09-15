import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './layoutInterface'

import homeCss from './index.module.css'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const LayoutComponent: React.FC<PropsType> = props => {
  const { route } = props
  return (
    <div>
      <div className={homeCss.navBar}>
        <div>
          <Link to="testDemo">demo页</Link>
        </div>
        <div>
          <Link to="login">登录页</Link>
        </div>
        <div>
          <Link to="home">Home页</Link>
        </div>
        <div>
          <Link to="immerDemo">ImmerDemo</Link>
        </div>
      </div>
      {route && renderRoutes(route.routes)}
    </div>
  )
}
export default LayoutComponent
