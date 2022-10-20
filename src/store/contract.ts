import { defineStore } from 'pinia'
import data from '@/assets/data.json'
import type { ContractData, PageData } from '@/types'

interface State {
  data: ContractData | null
}

export const useContractStore = defineStore('contract', {
  state: () =>
    ({
      data
    } as State),
  actions: {
    updatePage(pageKey, value: PageData) {
      if (this.data) {
        const idx = this.data.pages.findIndex(item => item.key === pageKey)
        if (idx !== -1) {
          this.data.pages[idx] = value
        }
      }
    },
    addControl(pageKey, value) {
      if (this.data) {
        const idx = this.data.pages.findIndex(item => item.key === pageKey)
        if (idx !== -1) {
          this.data.pages[idx].controls.push(value)
        }
      }
    },
    updateControl(pageKey, controlKey, value) {
      if (this.data) {
        const pageIdx = this.data.pages.findIndex(item => item.key === pageKey)
        if (pageIdx !== -1) {
          const controlIdx = this.data.pages[pageIdx].controls.findIndex(
            item => item.key === controlKey
          )
          if (controlIdx !== -1) {
            this.data.pages[pageIdx].controls[controlIdx] = value
          }
        }
      }
    }
  }
})
