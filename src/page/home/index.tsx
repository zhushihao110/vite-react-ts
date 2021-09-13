import React, { useState } from 'react'
import { PropsType } from './interface'
import homeCss from './index.module.css'
import { useStores } from '@/store/useStore'
import { observer } from 'mobx-react'

const Home: React.FC<PropsType> = observer(props => {
  const CounterStore = useStores('counterStore')
  return (
    <div className={homeCss.navBar}>
      Home页
      <div className="red">{CounterStore.counter}</div>
    </div>
  )
})

export default Home
