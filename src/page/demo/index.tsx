import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './interface'
import demoClass from './index.module.css'
import { useStores } from '@/store/useStore'
import { observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'

let flag = false
const DemoComponent: React.FC<PropsType> = observer(props => {
  const CounterStore = useStores('counterStore')
  const [count, setCount] = useState<StateType['count']>(1)
  const [list, setList] = useState<StateType['list']>([1, 2, 3, 4, 5, 6, 7, 8])

  const { route } = props
  useEffect(() => {
    if (flag) {
      document.title = `You clicked ${count} times`
    } else {
      flag = true
    }
  }, [count])

  const listNode = list.map((item, index) => {
    return <li key="item">{item}</li>
  })

  return (
    <div className={`${demoClass.box} red`}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 2)}>点 击 + 2 </button>
      <button onClick={() => setList([...list, 999])}>点 击 push</button>
      <ol>{listNode}</ol>
      <div>{CounterStore.counter}</div>
      <button onClick={() => CounterStore.increment()}>点 击 + 1 </button>
    </div>
  )
})

export default React.memo(DemoComponent)
