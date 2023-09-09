/*
 * @Author: nbn
 * @Date: 2023-09-06 20:58:47
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-09 15:12:39
 * @FilePath: /amis-widget/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import EnhanceLog from 'vite-plugin-enhance-log'
import veauryVitePlugins from 'veaury/vite/index.js'
import react from '@vitejs/plugin-react'
// import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
// import { viteMockServe } from 'vite-plugin-mock';
// import vueCompiler from '@vue/compiler-sfc'
import babel from 'vite-plugin-babel';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    EnhanceLog({
      splitBy: '\n',
      endLine: true,
      preTip: '😈😈😈😈😈😈😈😈😈😈😈😈😈',
      enableFileName: { enableDir: false }// or enableFileName: { enableDir: false}
    }),

    veauryVitePlugins({
      type: 'vue',
      reactOptions: {
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties']
          }
        }
      }
    }),

    mockDevServerPlugin({
      prefix: ['^/api/', '^/mid-platform-devplatform/api/'],
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
      '^/mid-platform-devplatform/api': {
        target: '',
      },
    },
  },

})
