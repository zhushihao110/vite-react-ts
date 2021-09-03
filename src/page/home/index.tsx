import React, { useState } from 'react'
import * as HomeTypes from './interface'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import homeCss from './index.module.css'

function Home(props: any) {
  let [count, setCount] = useState<HomeTypes.countType>(1)
  console.log(props)
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
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Home
