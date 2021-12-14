import React, { useState, useEffect, useRef } from 'react'
import { PropsType, StateType } from './tableInterface'
import { Button } from 'antd'

const dataCofig = {
  clounms: [
    {
      label: '表头1',
      colClass: { backgroundColor: 'red' },
      dataKey: 'N1'
    },
    {
      label: '表头2',
      colClass: { backgroundColor: 'blue' },
      dataKey: 'N2'
    }
  ],
  dataSource: [
    {
      N1: 123345679
    }
  ]
}

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

  const THead = dataCofig.clounms.map(item => {
    return <th key={item.dataKey}>{item.label}</th>
  })

  const TbodyTd = (keys: string[], data: any) => {
    const tr = keys.map((item: string, index: number) => {
      return <td key={`${item}${index}`}>{data[item]}</td>
    })
    return tr
  }

  const TBody = dataCofig.dataSource.map((item, index) => {
    const key = Object.keys(item)
    return <tr key="index">{TbodyTd(key, item)}</tr>
  })

  return (
    <div>
      Table
      <Button onClick={clickHandle}>{number}</Button>
      <Button onClick={clickTimer}>Timer</Button>
      <table border="2" align="center">
        <colgroup>
          {dataCofig.clounms.map(item => {
            return <col key={item.dataKey} style={item.colClass} />
          })}
        </colgroup>
        <thead>
          <tr>{THead}</tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>数据1</td>
            <td>数据2</td>
            <td>数据3</td>
            <td>数据4</td>
          </tr> */}
          {TBody}
        </tbody>
      </table>
      <div>
        <input type="date" />
        <input type="time" />
      </div>
    </div>
  )
}
export default TableComponent
