import React from 'react'
import router from '@/router'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const { SubMenu } = Menu
const { Sider } = Layout

const getIcon = (type: string | null) => {
  let node = null
  switch (type) {
    case 'UserOutlined':
      node = <UserOutlined />
      break
    case 'LaptopOutlined':
      node = <LaptopOutlined />
      break
    case 'NotificationOutlined':
      node = <NotificationOutlined />
      break
  }
  return node
}
const SideBar = () => {
  const getSubMenu = (route: Array<any>) => {
    return route.map(item => {
      if (!item.routes) {
        return (
          <Menu.Item key={item.key} icon={getIcon(item.icon)} style={{ margin: 0 }}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={item.name}
            icon={getIcon(item.icon)}
            style={{ paddingLeft: 0 }}
          >
            {getSubMenu(item.routes)}
          </SubMenu>
        )
      }
    })
  }
  const routesData = router[1].routes
  const nodeList = getSubMenu(routesData as Array<any>)

  return (
    <Sider width={200}>
      <div className={styles.logo}>LOGO</div>
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} theme="dark">
        {nodeList}
      </Menu>
    </Sider>
  )
}

export default SideBar
