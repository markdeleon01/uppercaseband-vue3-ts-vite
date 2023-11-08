import { defineStore } from 'pinia'
import DiscographyService from '@/services/DiscographyService.js'

export const useDiscographyStore = defineStore('discography', {
  state: () => ({
    releases: []
  }),
  actions: {
    async fetchReleases() {
      const response = await DiscographyService.getReleases()
      this.releases = response.data
    }
  }
})
