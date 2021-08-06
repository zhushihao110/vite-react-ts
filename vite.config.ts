// import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src')
//     }
//   }
// })
export default args => {
  console.log(args)
  return {
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, './src'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', 'json'],
    },
  }
}
