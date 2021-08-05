import React, { useState } from 'react'
import Home from './page/home/index'

function App() {
  console.log(import.meta.env, '---vite---')
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
