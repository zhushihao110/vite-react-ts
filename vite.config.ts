import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import path = require('path')
import path from 'path'

// https://vitejs.dev/config
export default defineConfig(args => {
  console.log(args)
  return {
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', 'json']
    }
  }
})
