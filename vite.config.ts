/*
 * @Author: nbn
 * @Date: 2023-09-06 20:58:47
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-11 00:43:03
 * @FilePath: /amis-widget/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import EnhanceLog from 'vite-plugin-enhance-log'
import veauryVitePlugins from 'veaury/vite/index.js'
// import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [

    EnhanceLog({
      splitBy: '\n',
      endLine: true,
      preTip: '😈😈😈😈😈😈😈😈😈😈😈😈😈',
      enableFileName: { enableDir: false }// or enableFileName: { enableDir: false}
    }),

    // (monacoEditorPlugin as any).default({}),//这是个坑，对于package.json type是module的包，有这个问题，否则会报monacoEditorPlugin is not a function

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
