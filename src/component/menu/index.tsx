import { Menu, Button } from 'antd'
import React from 'react'
import router from '@/router'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const SideBar: React.FC = () => {
  const getSubMenu = (route: Array<any>) => {
    return route.map(item => {
      if (!item.routes) {
        return (
          <Menu.Item key={item.key} style={{ margin: 0, padding: 0 }}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} title={item.name}>
            {getSubMenu(item.routes)}
          </SubMenu>
        )
      }
    })
  }
  const routesData = router[1].routes
  const nodeList = getSubMenu(routesData as Array<any>)
  return (
    <Menu theme="dark" style={{ width: '200px' }} mode="inline">
      {nodeList}
    </Menu>
  )
}

export default SideBar
