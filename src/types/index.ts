export interface ControlData {
  key: number
  type: string
  x: number
  y: number
}

export interface PageData {
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
