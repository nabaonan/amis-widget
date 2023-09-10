// vite.config.ts
import { defineConfig } from "file:///Users/nbn/Documents/workspace/github/amis-widget/node_modules/.pnpm/vite@4.4.5/node_modules/vite/dist/node/index.js";
import mockDevServerPlugin from "file:///Users/nbn/Documents/workspace/github/amis-widget/node_modules/.pnpm/vite-plugin-mock-dev-server@1.3.1_vite@4.4.5/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import EnhanceLog from "file:///Users/nbn/Documents/workspace/github/amis-widget/node_modules/.pnpm/vite-plugin-enhance-log@0.5.2_@babel+core@7.22.17_vite@4.4.5/node_modules/vite-plugin-enhance-log/dist/index.cjs";
import veauryVitePlugins from "file:///Users/nbn/Documents/workspace/github/amis-widget/node_modules/.pnpm/veaury@2.3.12_react-dom@18.2.0_react@18.2.0/node_modules/veaury/vite/index.js";
var vite_config_default = defineConfig({
  plugins: [
    EnhanceLog({
      splitBy: "\n",
      endLine: true,
      preTip: "\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}\u{1F608}",
      enableFileName: { enableDir: false }
      // or enableFileName: { enableDir: false}
    }),
    // (monacoEditorPlugin as any).default({}),//这是个坑，对于package.json type是module的包，有这个问题，否则会报monacoEditorPlugin is not a function
    veauryVitePlugins({
      type: "vue",
      reactOptions: {
        babel: {
          parserOpts: {
            plugins: ["decorators-legacy", "classProperties"]
          }
        }
      }
    }),
    mockDevServerPlugin({
      prefix: ["^/api/", "^/mid-platform-devplatform/api/"],
      include: "mock/**/*.mock.{ts,js,cjs,mjs,json,json5}",
      build: {
        serverPort: 8080
      }
    })
  ],
  server: {
    cors: false,
    // 在 proxy 中配置的 代理前缀， mock-dev-server 才会拦截并mock
    proxy: {
      "^/api": {
        target: ""
      },
      "^/mid-platform-devplatform/api": {
        target: ""
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmJuL0RvY3VtZW50cy93b3Jrc3BhY2UvZ2l0aHViL2FtaXMtd2lkZ2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbmJuL0RvY3VtZW50cy93b3Jrc3BhY2UvZ2l0aHViL2FtaXMtd2lkZ2V0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9uYm4vRG9jdW1lbnRzL3dvcmtzcGFjZS9naXRodWIvYW1pcy13aWRnZXQvdml0ZS5jb25maWcudHNcIjsvKlxuICogQEF1dGhvcjogbmJuXG4gKiBARGF0ZTogMjAyMy0wOS0wNiAyMDo1ODo0N1xuICogQExhc3RFZGl0b3JzOiBuYm5cbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDktMTEgMDA6NDM6MDNcbiAqIEBGaWxlUGF0aDogL2FtaXMtd2lkZ2V0L3ZpdGUuY29uZmlnLnRzXG4gKiBARGVzY3JpcHRpb246IFxuICovXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgbW9ja0RldlNlcnZlclBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1tb2NrLWRldi1zZXJ2ZXInXG5pbXBvcnQgRW5oYW5jZUxvZyBmcm9tICd2aXRlLXBsdWdpbi1lbmhhbmNlLWxvZydcbmltcG9ydCB2ZWF1cnlWaXRlUGx1Z2lucyBmcm9tICd2ZWF1cnkvdml0ZS9pbmRleC5qcydcbi8vIGltcG9ydCBtb25hY29FZGl0b3JQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tbW9uYWNvLWVkaXRvcic7XG5cbi8vIGltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbi8vIGltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kLXBsdXMnO1xuLy8gaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuLy8gaW1wb3J0IHZ1ZUNvbXBpbGVyIGZyb20gJ0B2dWUvY29tcGlsZXItc2ZjJ1xuLy8gaW1wb3J0IGJhYmVsIGZyb20gJ3ZpdGUtcGx1Z2luLWJhYmVsJztcbi8vIGltcG9ydCB2aXJ0dWFsSHRtbCBmcm9tICd2aXRlLXBsdWdpbi12aXJ0dWFsLWh0bWwnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG5cbiAgICBFbmhhbmNlTG9nKHtcbiAgICAgIHNwbGl0Qnk6ICdcXG4nLFxuICAgICAgZW5kTGluZTogdHJ1ZSxcbiAgICAgIHByZVRpcDogJ1x1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOFx1RDgzRFx1REUwOCcsXG4gICAgICBlbmFibGVGaWxlTmFtZTogeyBlbmFibGVEaXI6IGZhbHNlIH0vLyBvciBlbmFibGVGaWxlTmFtZTogeyBlbmFibGVEaXI6IGZhbHNlfVxuICAgIH0pLFxuXG4gICAgLy8gKG1vbmFjb0VkaXRvclBsdWdpbiBhcyBhbnkpLmRlZmF1bHQoe30pLC8vXHU4RkQ5XHU2NjJGXHU0RTJBXHU1NzUxXHVGRjBDXHU1QkY5XHU0RThFcGFja2FnZS5qc29uIHR5cGVcdTY2MkZtb2R1bGVcdTc2ODRcdTUzMDVcdUZGMENcdTY3MDlcdThGRDlcdTRFMkFcdTk1RUVcdTk4OThcdUZGMENcdTU0MjZcdTUyMTlcdTRGMUFcdTYyQTVtb25hY29FZGl0b3JQbHVnaW4gaXMgbm90IGEgZnVuY3Rpb25cblxuICAgIHZlYXVyeVZpdGVQbHVnaW5zKHtcbiAgICAgIHR5cGU6ICd2dWUnLFxuICAgICAgcmVhY3RPcHRpb25zOiB7XG4gICAgICAgIGJhYmVsOiB7XG4gICAgICAgICAgcGFyc2VyT3B0czoge1xuICAgICAgICAgICAgcGx1Z2luczogWydkZWNvcmF0b3JzLWxlZ2FjeScsICdjbGFzc1Byb3BlcnRpZXMnXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgbW9ja0RldlNlcnZlclBsdWdpbih7XG4gICAgICBwcmVmaXg6IFsnXi9hcGkvJywgJ14vbWlkLXBsYXRmb3JtLWRldnBsYXRmb3JtL2FwaS8nXSxcbiAgICAgIGluY2x1ZGU6ICdtb2NrLyoqLyoubW9jay57dHMsanMsY2pzLG1qcyxqc29uLGpzb241fScsXG4gICAgICBidWlsZDoge1xuICAgICAgICBzZXJ2ZXJQb3J0OiA4MDgwXG4gICAgICB9XG4gICAgfSksXG5cbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgY29yczogZmFsc2UsXG4gICAgLy8gXHU1NzI4IHByb3h5IFx1NEUyRFx1OTE0RFx1N0Y2RVx1NzY4NCBcdTRFRTNcdTc0MDZcdTUyNERcdTdGMDBcdUZGMEMgbW9jay1kZXYtc2VydmVyIFx1NjI0RFx1NEYxQVx1NjJFNlx1NjIyQVx1NUU3Nm1vY2tcbiAgICBwcm94eToge1xuICAgICAgJ14vYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgfSxcbiAgICAgICdeL21pZC1wbGF0Zm9ybS1kZXZwbGF0Zm9ybS9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBUUEsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyx1QkFBdUI7QUFXOUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBRVAsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsZ0JBQWdCLEVBQUUsV0FBVyxNQUFNO0FBQUE7QUFBQSxJQUNyQyxDQUFDO0FBQUE7QUFBQSxJQUlELGtCQUFrQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxRQUNaLE9BQU87QUFBQSxVQUNMLFlBQVk7QUFBQSxZQUNWLFNBQVMsQ0FBQyxxQkFBcUIsaUJBQWlCO0FBQUEsVUFDbEQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsb0JBQW9CO0FBQUEsTUFDbEIsUUFBUSxDQUFDLFVBQVUsaUNBQWlDO0FBQUEsTUFDcEQsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLFFBQ0wsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUVIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxrQ0FBa0M7QUFBQSxRQUNoQyxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
