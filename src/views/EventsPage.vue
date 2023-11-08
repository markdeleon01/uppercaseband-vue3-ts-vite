<template>
  <div class="events">
    <h2>Events</h2>
    <EventListing
      v-for="event in eventsStore.events"
      :key="event['id']"
      :event="event"
    />
  </div>
</template>

<script lang="ts">
import { useEventsStore } from '@/stores/Events'
import { mapStores } from 'pinia'
import EventListing from '../components/EventListing.vue'
import type { NavigationGuardNext } from 'vue-router'

function getEvents(next: NavigationGuardNext) {
  const store = useEventsStore() // Option Store:  Events
  store
    .fetchEvents()
    .then(() => {
      next()
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        // redirect to 404 page with name of resource missing
        next({ name: '404', params: { resource: 'page' } })
      } else {
        next({ name: 'NetworkIssue' })
      }
    })
}

export default {
  name: 'events-view',
  beforeRouteEnter(routeTo, routeFrom, next) {
    getEvents(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getEvents(next)
  },
  components: {
    EventListing
  },
  computed: {
    ...mapStores(useEventsStore)
  }
}
</script>
