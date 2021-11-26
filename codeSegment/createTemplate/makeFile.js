const path = require('path')
const { exec, execSync } = require('child_process')
const fileSave = require('file-save')
// import path from 'path'
// import { exec, execSync } from 'child_process'
// import fileSave from 'file-save'
const filename = process.argv[2]
// const PackagePath = path.resolve(__dirname, './packages', filename)
const PackagePath = path.resolve(__dirname, '../../src/page', filename)

console.log('start')
process.on('exit', () => {
  console.log('---out---')
})

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const params = process.argv
console.log(params)
console.log(process)

// const template = {
//   content: `<template>
//     <div class="${filename}"></div>
// </template>

// <script>
// export default {
//     name: '${filename}'
// };
// </script>`
// }

const firstText = filename.charAt(0).toUpperCase()
const componentName = firstText + filename.slice(1)
const template = {
  content: `import React, { useState, useEffect } from 'react'
import { StateType, PropsType } from './${filename}Interface'
  
  const ${componentName}Component: React.FC<PropsType> = props => {

    return <div>${componentName}</div>

  }
export default ${componentName}Component
  `
}

const interfaceTemplate = {
  content: `export interface PropsType {}
  
export interface StateType {}
  `
}

// 创建前清空packages
// execSync('rm -rf ./packages', err => {
//   console.log(err)
// })

// 创建 文件夹 及文件
// fileSave(path.join(PackagePath, `${filename}.vue`))
//   .write(template.content, 'utf8')
//   .end('\n')

// 创建前清空 原有相同名字目录
execSync(`rm -rf ${PackagePath}`, err => {
  console.log(err)
})
fileSave(path.join(PackagePath, `${filename}.tsx`))
  .write(template.content, 'utf8')
  .end('\n')

fileSave(path.join(PackagePath, `${filename}Interface.ts`))
  .write(interfaceTemplate.content, 'utf8')
  .end('\n')

// 利用 exec 执行指令
// exec("ipconfig", (err, stdout, stderr) => {
//     console.log("ping success")
//     console.log(stdout)
// })
