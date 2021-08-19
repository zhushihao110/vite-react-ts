import React from 'react'
import Home from '@/page/home/index'
import Demo from '@/page/demo/index'

function App() {
  console.log(import.meta.env, '---vite---')
  return (
    <div className="App">
      <Home />
      <Demo id={1} />
    </div>
  )
}

export default App
