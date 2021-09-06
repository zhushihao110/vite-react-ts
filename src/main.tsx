import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'

// 初始化全局UI
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
