import type { ControlProps, PageData } from '@/types'

// 计算控件的x轴距离
export const calcX = (
  e: MouseEvent,
  controlProps: ControlProps,
  pageData: PageData
) => {
  const halfWidth = Math.ceil(controlProps.width / 2)

  return handleXBoundary(e.offsetX - halfWidth, controlProps, pageData)
}

// 计算控件的y轴距离
export const calcY = (
  e: MouseEvent,
  controlProps: ControlProps,
  pageData: PageData
) => {
  const halfHeight = Math.ceil(controlProps.height / 2)

  return handleXBoundary(e.offsetY - halfHeight, controlProps, pageData)
}

// 处理x轴的边界问题
export const handleXBoundary = (
  x: number,
  controlProps: ControlProps,
  pageData: PageData
) => {
  if (x < 0) {
    return 0
  } else if (x + controlProps.width > pageData.width) {
    return pageData.width - controlProps.width
  } else {
    return x
  }
}

// 处理y轴的边界问题
export const handleYBoundary = (
  y: number,
  controlProps: ControlProps,
  pageData: PageData
) => {
  if (y < 0) {
    return 0
  } else if (y + controlProps.height > pageData.height) {
    return pageData.height - controlProps.height
  } else {
    return y
  }
}
