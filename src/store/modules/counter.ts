import { observable } from 'mobx'

export interface CounterStore {
  counter: number
  increment: () => void
  decrement: () => void
}

const counterStore: CounterStore = observable({
  counter: 0,
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  }
})

export default counterStore
