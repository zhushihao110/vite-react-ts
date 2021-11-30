import { observable } from 'mobx'
import routerConfig from '@/router'
import { RouteConfig } from 'react-router-config'

export interface RouterStore {
  routeData: RouteConfig[]
  initRoute: () => void
  changeRouter: (activeValue: string) => void
}

const routerStore: RouterStore = observable({
  routeData: routerConfig,
  initRoute() {
    this.routeData = routerConfig
  },
  changeRouter(activeValue: string) {
    let activreData: RouteConfig[] = routerConfig
    console.log(activeValue)
    this.routeData = activreData
  }
})

export default routerStore
