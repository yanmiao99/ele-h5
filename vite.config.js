import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {VantResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 自动引入vant 组件
      resolvers: [VantResolver()],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      },
    }),
    Components({
      // 指定扫描组件库的路径
      dirs: ['src/components'],
      // 自动导入组件库
      extensions: ['vue'],
      // 自动引入vant 组件
      resolvers: [VantResolver()],
      dts: 'types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
