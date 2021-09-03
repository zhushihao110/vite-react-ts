import { RouteConfig } from 'react-router-config'
import Layout from '@/page/home'
import Demo from '@/page/demo'
import App from '@/App'

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
        component: Layout
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
