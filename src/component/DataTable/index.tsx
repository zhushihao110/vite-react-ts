import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { PropsType } from './interface'

const DataTable: React.FC<PropsType> = props => {
  console.log(props)
  return (
    <div>
      <Table>DataTable</Table>
    </div>
  )
}

export default DataTable
