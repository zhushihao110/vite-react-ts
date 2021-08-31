import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './interface'
import demoClass from './index.module.css'

const DemoComponent: React.FC<PropsType> = props => {
  const [count, setCount] = useState<StateType['count']>(1)
  console.log(demoClass)

  useEffect(() => props.showCount(count), [count])
  return (
    <div className={`${demoClass.box} red`}>
      <div>当前props 传入ID：{props.id}</div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 2)}>点击+2</button>
      </div>
    </div>
  )
}
export default React.memo(DemoComponent)
