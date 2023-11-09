import { defineStore } from 'pinia'
import DiscographyService from '@/services/DiscographyService.js'

export const useDiscographyStore = defineStore('discography', {
  state: () => ({
    releases: []
  }),
  actions: {
    /* c8 ignore start */
    async fetchReleases() {
      const response = await DiscographyService.getReleases()
      this.releases = response.data
    }
    /* c8 ignore stop */
  }
})
