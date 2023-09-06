/*
 * @Author: nbn
 * @Date: 2023-09-06 20:58:47
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-06 21:13:24
 * @FilePath: /amis-widget/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),

    mockDevServerPlugin({
      prefix: '^/api/',
      include: 'mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
      build: {
        serverPort: 8080
      }
    }),

  ],
  server: {
    cors: false,
    // 在 proxy 中配置的 代理前缀， mock-dev-server 才会拦截并mock
    proxy: {
      '^/api': {
        target: '',
      },
    },
  },

})
