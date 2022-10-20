export interface ControlProps {
  width: number
  height: number
}

export interface ControlData {
  key: number
  type: string
  x: number
  y: number
  props: ControlProps
}

export interface PageData {
  key: number
  page: number
  img: string
  width: number
  height: number
  controls: ControlData[]
}

export interface ContractData {
  name: string
  pages: PageData[]
}
