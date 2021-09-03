import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  console.log(import.meta.env, '---vite---')
  return (
    <div className="App">
      登录页
      <div>
        <Link to="home">Home页</Link>
      </div>
    </div>
  )
}

export default App
