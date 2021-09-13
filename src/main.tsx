import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'
import routes from '@/router'
import stores from '@/store'

// 初始化全局UI
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routes)}</Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
