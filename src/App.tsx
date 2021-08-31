import React from 'react'
import Home from '@/page/home/index'
import Demo from '@/page/demo/index'

function App() {
  console.log(import.meta.env, '---vite---')
  const showCount = (number: number) => {
    alert(`number is ${number}`)
  }
  return (
    <div className="App">
      <Home />
      <Demo id={1} showCount={showCount} />
    </div>
  )
}

export default App
