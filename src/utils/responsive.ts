// 响应式设计工具
export const MI_BREAK_POINTS = {
  xs: 360,
  sm: 600,
  md: 840,
  lg: 1024,
  xl: 1440,
  xxl: 1920
} as const

// 基准设计稿宽度
const DESIGN_WIDTH = 1920
const BASE_FONT_SIZE = 16
const MIN_FONT_SIZE = 12
const MAX_FONT_SIZE = 16

// 计算缩放比例
export function calculateScale(width: number = window.innerWidth): number {
  return width / DESIGN_WIDTH
}

// 计算响应式字体大小
export function calculateFontSize(scale: number): number {
  const fontSize = BASE_FONT_SIZE * scale
  return Math.min(Math.max(fontSize, MIN_FONT_SIZE), MAX_FONT_SIZE)
}

// 设置根元素字体大小
export function setRootFontSize(): void {
  const scale = calculateScale()
  const fontSize = calculateFontSize(scale)
  document.documentElement.style.fontSize = `${fontSize}px`
}

// 判断设备类型
export function isMobile(): boolean {
  return window.innerWidth <= MI_BREAK_POINTS.md
}

// 监听窗口变化
export function initResponsive(): void {
  setRootFontSize()

  let timer: number
  window.addEventListener('resize', () => {
    if (timer) {
      window.cancelAnimationFrame(timer)
    }
    timer = window.requestAnimationFrame(() => {
      setRootFontSize()
    })
  })

  window.addEventListener('orientationchange', setRootFontSize)
}

// 导出断点类型
export type Breakpoint = keyof typeof MI_BREAK_POINTS