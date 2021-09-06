import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './interface'
import demoClass from './index.module.css'

let flag = false
const DemoComponent: React.FC<PropsType> = props => {
  const [count, setCount] = useState<StateType['count']>(1)
  const [list, setList] = useState<StateType['list']>([1, 2, 3, 4, 5, 6, 7, 8])
  console.log(props)

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
      <div>
        <button onClick={() => setCount(count + 2)}>点 击 + 2 </button>
      </div>
      {/* <ol>{listNode}</ol> */}
    </div>
  )
}
export default React.memo(DemoComponent)
