import { RouteConfig } from 'react-router-config'
import { Suspense, lazy } from 'react'

// React.lazy 和 Suspense 尚不可用于服务器端渲染
// 如果要在服务器渲染的应用程序中进行代码拆分，建议使用 Loadable Components
const Layout = lazy(() => import('@/page/layout'))
const Home = lazy(() => import('@/page/home'))
const Demo = lazy(() => import('@/page/demo'))
const App = lazy(() => import('@/App'))

const routerConfig: RouteConfig[] = [
  {
    path: '/login',
    exect: true,
    component: App
  },
  {
    path: '/',
    exect: true,
    component: Layout,
    routes: [
      {
        path: '/home',
        exect: false,
        component: Home
      },
      {
        path: '/testDemo',
        exect: false,
        component: Demo
      }
    ]
  }
]

export default routerConfig
