import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './immerDemoInterface'
import { produce } from 'immer'
import { Button } from 'antd'

const ImmerDemoComponent: React.FC<PropsType> = props => {
  const [forItem, setFormItem] = useState<StateType>({
    name: 'antd',
    age: 5,
    friends: [
      {
        id: 1,
        value: '嘿嘿'
      },
      {
        id: 2,
        value: '哈哈'
      }
    ]
  })

  const add = () => {
    setFormItem(
      produce(draftState => {
        draftState.friends.push({ id: Math.random() * 10, value: '洛洛' })
      })
    )
  }

  const modify = () => {
    setFormItem(
      produce(draftState => {
        draftState.friends[draftState.friends.length - 1].value = '修改了，哈哈哈哈'
      })
    )
  }
  const friendsList = forItem.friends.map(item => {
    return <li key={item.id}>{item.value}</li>
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
