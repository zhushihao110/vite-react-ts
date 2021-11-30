import React, { useState, useEffect, useRef } from 'react'
import { PropsType, StateType } from './tableInterface'
import { Button } from 'antd'

const TableComponent: React.FC<PropsType> = props => {
  const [number, setNumber] = useState<StateType['number']>(0)

  useEffect(() => {
    console.log(number, '---页面加载/更新---')
  }, [number])

  const clickHandle = () => {
    setNumber(1)
    setNumber(2)
  }

  const clickTimer = () => {
    // setTimeout(() => {
    //   setNumber(3)
    //   setNumber(4)
    // }, 0)

    const promise = new Promise((resolve, reject) => {
      setNumber(5)
      setNumber(6)
      resolve(1)
    }).then(res => {
      setNumber(7)
      setNumber(8)
    })
  }

  return (
    <div>
      Table
      <Button onClick={clickHandle}>{number}</Button>
      <Button onClick={clickTimer}>Timer</Button>
    </div>
  )
}
export default TableComponent
