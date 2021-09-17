import { RouteConfig } from 'react-router-config'
import { Suspense, lazy } from 'react'

// React.lazy 和 Suspense 尚不可用于服务器端渲染
// 如果要在服务器渲染的应用程序中进行代码拆分，建议使用 Loadable Components
const Layout = lazy(() => import('@/page/layout'))
const Home = lazy(() => import('@/page/home'))
const Mobx = lazy(() => import('@/page/demo'))
const App = lazy(() => import('@/App'))
const ImmerDemo = lazy(() => import('@/page/immerDemo/immerDemo'))
const Table = lazy(() => import('@/page/table/table'))
const Dailog = lazy(() => import('@/page/dailog/dailog'))
const LayoutBox = lazy(() => import('@/component/layout'))

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
        name: 'Home'
      },
      {
        path: '/testDemo',
        component: LayoutBox,
        key: 'TestDemo',
        name: 'TestDemo',
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
          }
        ]
      },
      {
        path: '/immerDemo',
        exect: false,
        key: 'ImmerDemo',
        component: ImmerDemo,
        name: 'ImmerDemo'
      }
    ]
  }
]

export default routerConfig
