import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite' // 引入vite配置
import type { Plugin } from 'vite' // 引入插件
import { fileURLToPath } from 'url' // 处理路径
import path from 'path' // 处理路径
import { dirname, resolve } from 'path' // 处理路径

import { visualizer } from 'rollup-plugin-visualizer' // 体积分析
import compression from 'vite-plugin-compression' // gzip压缩

import AutoImport from 'unplugin-auto-import/vite' // 自动引入
import Components from 'unplugin-vue-components/vite' // 按需引入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 按需引入element-plus组件

// 获取当前文件的路径和目录名
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 导出 Vite 配置
export default defineConfig(({ mode }) => {
  // 获取项目根路径
  const root = process.cwd()
  const env: any = loadEnv(mode, root)

  return {
    lintOnSave: false,//关闭语法检查
    server: {
      host: '0.0.0.0',// 允许外部访问
      port: 8088,// 开发服务器端口
      proxy: {
        // 开发环境代理配置
        '/dev': {
          target: env.VITE_APP_BASE_URL, // 目标地址
          changeOrigin: true,// 是否改变源
          rewrite: path => path.replace(/^\/api/, '') // 重写路径
        },
        // 生产环境代理配置
        '/pro': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),// Vue 插件
      visualizer() as Plugin,// 打包体积分析插件
      compression({
        threshold: 10240, // 文件大小超过 10KB 时启用压缩
        algorithm: 'brotliCompress', // 使用 Brotli 压缩算法
        ext: '.br' // 压缩文件扩展名
      }) as Plugin,
      AutoImport({
        imports: ['vue', 'vue-router'], // 自动引入 Vue 和 Vue Router
        resolvers: [ElementPlusResolver()] // 自动引入 Element Plus
      }),
      Components({
        resolvers: [ElementPlusResolver()] // 按需引入 Element Plus 组件
      })
    ],
    resolve: {
      alias: {
        '@assets': path.join(__dirname, 'src/assets'), // 设置 @assets 别名
        '@': resolve(__dirname, './src') // 设置 @ 别名指向 src 目录
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: id => {
            // 手动分包配置
            if (id.includes('node_modules')) {
              return 'vendor' // 第三方依赖打包到 vendor
            }
            if (id.includes('three')) return 'three' // three.js 单独打包
            if (id.includes('gsap')) return 'gsap' // gsap 单独打包
            if (id.includes('element-plus')) return 'element-plus' // Element Plus 单独打包
          },
          external: ['vue', 'vue-router', 'element-plus'],// 外部依赖，不打包
          paths: {
            // 使用 CDN 加载外部依赖
            'vue': 'https://cdn.jsdelivr.net/npm/vue@3.3.11/dist/vue.global.prod.js',
            'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@4.2.5/dist/vue-router.global.prod.js',
            'element-plus': 'https://cdn.jsdelivr.net/npm/element-plus@2.9.7/dist/index.full.min.js'
          },
          globals: {
            // 全局变量映射
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'element-plus': 'ElementPlus'
          }
        },
        chunkSizeWarningLimit: 1000, // 超过 1000KB 时发出警告
        cssCodeSplit: true, // CSS代码分割
        minify: 'terser', // 高级压缩
        terserOptions: {
          compress: {
            drop_console: true, // 移除console
            drop_debugger: true // 移除debugger
          }
        }
      },
      optimizeDeps: {
        include: ['three', 'gsap'] // 优化依赖预构建
      }
    },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      }
    }
  }
})
