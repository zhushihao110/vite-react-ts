import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './immerDemoInterface'
import { produce } from 'immer'
import { Button } from 'antd'

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
        draftState.friends[draftState.friends.length - 1] = '修改了，哈哈哈哈'
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
      <Button type="primary" onClick={add}>
        增加friends
      </Button>
      <br />
      <Button type="dashed" onClick={modify}>
        修改friends
      </Button>
      <ol>{friendsList}</ol>
    </>
  )
}
export default ImmerDemoComponent
