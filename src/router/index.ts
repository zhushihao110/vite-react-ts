import { RouteConfig } from 'react-router-config'
import { Suspense, lazy } from 'react'

// React.lazy 和 Suspense 尚不可用于服务器端渲染
// 如果要在服务器渲染的应用程序中进行代码拆分，建议使用 Loadable Components
const Layout = lazy(() => import('@/page/layout'))
import Home from '@/page/home'
import Mobx from '@/page/demo'
import App from '@/App'
import ImmerDemo from '@/page/immerDemo/immerDemo'
import Table from '@/page/table/table'
import Dailog from '@/page/dailog/dailog'
import LayoutBox from '@/component/layout'
import HooksDemo from '@/page/hooksDemo/hooksDemo'

const routerConfig: RouteConfig[] = [
  {
    path: '/login',
    exect: true,
    key: 'login',
    component: App
  },
  {
    path: '/',
    exect: true,
    key: 'Layout',
    component: Layout,
    routes: [
      {
        path: '/home',
        exect: false,
        component: Home,
        key: 'Home',
        name: 'Home',
        icon: 'UserOutlined'
      },
      {
        path: '/testDemo',
        component: LayoutBox,
        key: 'TestDemo',
        name: 'TestDemo',
        icon: 'LaptopOutlined',
        routes: [
          {
            path: '/testDemo/table',
            component: Table,
            key: 'Table',
            exect: false,
            name: 'Table'
          },
          {
            path: '/testDemo/dailog',
            component: Dailog,
            key: 'Dailog',
            exect: true,
            name: 'Dailog'
          },
          {
            path: '/testDemo/mobx',
            component: Mobx,
            key: 'Mobx',
            exect: true,
            name: 'Mobx'
          },
          {
            path: '/testDemo/hooksDemo',
            component: HooksDemo,
            key: 'HooksDemo',
            exect: true,
            name: 'HooksDemo'
          }
        ]
      },
      {
        path: '/immerDemo',
        exect: false,
        key: 'ImmerDemo',
        component: ImmerDemo,
        name: 'ImmerDemo',
        icon: 'NotificationOutlined'
      }
    ]
  }
]

export default routerConfig
