import { defineConfig, loadEnv } from 'vite' // 引入vite配置
import type { Plugin } from 'vite' // 引入插件
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer' // 体积分析
import compression from 'vite-plugin-compression' // gzip压缩
import { fileURLToPath } from 'url' // 处理路径
import path from "path"; // 处理路径
import { dirname, resolve } from 'path' // 处理路径
import AutoImport from 'unplugin-auto-import/vite' // 自动引入
import Components from 'unplugin-vue-components/vite'  // 按需引入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 按需引入element-plus组件

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  // 根路径
  const root = process.cwd();
  const env: any = loadEnv(mode, root);
  return {
    server: {
      host: '0.0.0.0',
      port: 8088,
      proxy: {
        '/dev': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/pro': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    plugins: [
      vue(),
      visualizer() as Plugin, compression() as Plugin,
      AutoImport({
        imports: ["vue", "vue-router"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@assets": path.join(__dirname, "src/assets"),
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three'],
            gsap: ['gsap'],
            vendor: ['vue', 'vue-router']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    },
    optimizeDeps: {
      include: ['three', 'gsap']
    },


  }
}

)
