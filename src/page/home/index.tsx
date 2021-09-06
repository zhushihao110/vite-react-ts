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
      <div className={homeCss.navBar}>Home页</div>
    </div>
  )
}

export default Home
