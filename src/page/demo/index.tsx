import React, { useState, useEffect, useRef } from 'react'
import { StateType, PropsType } from './interface'
import demoClass from './index.module.css'
import { useStores } from '@/store/useStore'
import { observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'

const DemoComponent: React.FC<PropsType> = observer(props => {
  const CounterStore = useStores('counterStore')
  const [count, setCount] = useState<StateType['count']>(1)
  let flag = useRef<StateType['flag']>(false)

  const { route } = props
  useEffect(() => {
    if (flag.current) {
      document.title = `You clicked ${count} times`
    } else {
      flag.current = true
    }
  }, [count])

  return (
    <div className={`${demoClass.box} red`}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 2)}>点 击 + 2 </button>
      <div>CounterStore.counter：{CounterStore.counter}</div>
      <button onClick={() => CounterStore.increment()}>点 击 + 1 </button>
    </div>
  )
})

export default React.memo(DemoComponent)
