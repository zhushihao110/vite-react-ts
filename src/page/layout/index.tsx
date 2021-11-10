import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './layoutInterface'
import SideBar from '@/component/menu'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content } = Layout

import LayoutCss from './index.module.css'
import { renderRoutes } from 'react-router-config'

const LayoutComponent: React.FC<PropsType> = props => {
  const { route } = props
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <Header className={LayoutCss.header}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className={LayoutCss.contentHeader}>
          {/* <Breadcrumb className={LayoutCss.navBar}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className={LayoutCss.content}>{route && renderRoutes(route.routes)}</div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default LayoutComponent
