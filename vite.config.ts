import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import path = require('path')
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config
export default defineConfig(args => {
  console.log(args)
  return {
    plugins: [
      reactRefresh(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: name => `antd/lib/${name}/style/index.less`
          }
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', 'json']
    }
  }
})
