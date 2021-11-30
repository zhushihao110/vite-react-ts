import counterStore from './modules/counter'
import routerStore from './routerStore'

const _store = {
  routerStore,
  counterStore
}

export type StoreType = typeof _store

export default _store
