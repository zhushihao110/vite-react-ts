import counterStore from './modules/counter'

const _store = {
  counterStore
}

export type StoreType = typeof _store

export default _store
