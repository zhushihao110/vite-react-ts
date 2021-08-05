import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src')
//     }
//   }
// })
console.log(resolve(__dirname, 'src'))
export default ( args ) => {
  console.log(args)
  return {
    plugins: [reactRefresh()],
    resolve: {
      alias: { // alias 无效， 目前没有很好的解决方法
        '@': resolve(__dirname, 'src')
      }
    }
  }
}
