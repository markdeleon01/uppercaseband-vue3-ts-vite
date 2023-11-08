import { defineStore } from 'pinia'
import EventService from '@/services/EventService.js'

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: []
  }),
  actions: {
    async fetchEvents() {
      const response = await EventService.getEvents()
      this.events = response.data
    }
  }
})
