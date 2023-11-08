<template>
  <div class="discography">
    <h2>Discography</h2>
    <DiscographyListing
      v-for="release in discographyStore.releases"
      :key="release['title']"
      :release="release"
    />
  </div>
</template>

<script lang="ts">
import { useDiscographyStore } from '@/stores/Discography'
import { mapStores } from 'pinia'
import DiscographyListing from '@/components/DiscographyListing.vue'
import type { NavigationGuardNext } from 'vue-router'

function getReleases(next: NavigationGuardNext) {
  const store = useDiscographyStore() // Option Store:  Discography
  store
    .fetchReleases()
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
  name: 'discography-view',
  beforeRouteEnter(routeTo, routeFrom, next) {
    getReleases(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getReleases(next)
  },
  components: {
    DiscographyListing
  },
  computed: {
    ...mapStores(useDiscographyStore)
  }
}
</script>
