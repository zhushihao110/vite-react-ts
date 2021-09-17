import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './layoutInterface'
import SideBar from '@/component/menu'

import LayoutCss from './index.module.css'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const LayoutComponent: React.FC<PropsType> = props => {
  const { route } = props
  return (
    <div className={LayoutCss.box}>
      {/* <div className={homeCss.navBar}>
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
      </div> */}
      <SideBar />
      <div className={LayoutCss.content}>
        <div className={LayoutCss.navBar}>顶部横条</div>
        {route && renderRoutes(route.routes)}
      </div>
    </div>
  )
}
export default LayoutComponent
