/// <reference types="vite/client" />
/// <reference types="vue/dist/vue.d.ts" />
/// <reference types="@types/three" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'particles.js'
declare module 'three'
declare module 'gsap'

// 声明 particlesJS
declare const particlesJS: any

// 声明 SCSS 模块
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}