import { RouteConfig } from 'react-router-config'
import { Suspense, lazy } from 'react'

const Layout = lazy(() => import('@/page/layout'))
const Home = lazy(() => import('@/page/home'))
const Demo = lazy(() => import('@/page/demo'))
const App = lazy(() => import('@/App'))

const routerConfig: RouteConfig[] = [
  {
    path: '/login',
    exect: false,
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
