import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './immerDemoInterface'
import { produce } from 'immer'

const ImmerDemoComponent: React.FC<PropsType> = props => {
  const [forItem, setFormItem] = useState({
    name: '',
    age: '',
    friends: ['嘿嘿', '哈哈']
  })

  const add = () => {
    setFormItem(
      produce(draftState => {
        draftState.friends.push('洛洛')
      })
    )
  }

  const modify = () => {
    setFormItem(
      produce(draftState => {
        draftState.friends[0] = '修改了，哈哈哈哈'
      })
    )
  }
  const friendsList = forItem.friends.map(item => {
    return <li key="item">{item}</li>
  })
  console.log(forItem)
  return (
    <>
      <div>
        <span>age: {forItem.age}</span> <span>name: {forItem.name}</span>
      </div>
      <button onClick={add}>增加friends</button>
      <br />
      <button onClick={modify}>修改friends</button>
      <ol>{friendsList}</ol>
    </>
  )
}
export default ImmerDemoComponent
