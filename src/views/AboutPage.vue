<template>
  <div class="about">
    <h2>Band Members</h2>
    <div class="band-members">
      <p class="member-item" v-for="member in membersStore.members" :key="member.name">
        <span>{{ member.name }} - {{ member.role }}</span>
      </p>
    </div>
    <div class="band-pic">
      <img src="/uppercase2019-bandPic.png" />
    </div>
    <div class="biography">
      <p>
        Formed in 2009, UPPERCASE is a Filipino-Canadian alternative pop rock indie band from
        Toronto, Canada pursuing Original Pilipino Music (OPM).
      </p>
      <p>
        Composed of Mark de Leon (vocals/guitars), Allan Lagat (bass), Joey Giagonia (lead guitars),
        and Kyle Andre (drums).
      </p>
      <p>
        In 2013 the band released their debut album entitled "<i>Time Space Warp</i>", and their
        first single "<i>Balikbayan</i>" caught the attention of Filipino online radio stations in
        the UK, Dubai, Manila and Toronto. They were unanimously voted "<b>Top Band</b>" at the 2013
        Filipinos Making Waves Festival held at Dundas Square in downtown Toronto, winning over
        judges with their hit single "<i>Ere</i>".
      </p>
      <p>
        In 2015 the whole band went back home to Manila and performed gigs around the city to
        promote their music. They released a sophomore EP album entitled "<i>Bukas Makalawa</i>"
        consisting of five new tracks, including the single "<i>Tuldok</i>" released in 2016. They
        also released a Christmas single entitled "<i>Babalik</i>" on December 2, 2017 as a salute
        to all Overseas Filipino Workers and Filipino migrants around the world.
      </p>
      <p>
        The band released its newest single "<i>Tanging Ikaw</i>" on February 9, 2019, and "<i
          >Ligaw Na Tadhana</i
        >" on March 23, 2023, which were featured on Spotify's New Music Friday Philippines playlist
        on their debut weeks and have enjoyed popularity and heavy streaming from listeners in the
        Philippines.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { useMembersStore } from '@/stores/Members'
import { mapStores } from 'pinia' //get access to the whole store with mapStores()
import type { NavigationGuardNext } from 'vue-router'

function getMembers(next: NavigationGuardNext) {
  const store = useMembersStore() // Option Store:  Members

  //Once the store is instantiated, you can access any property defined in state, getters, and actions directly on the store.
  store
    .fetchMembers() // call the store action
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
  name: 'about-view',
  beforeRouteEnter(routeTo, routeFrom, next) {
    getMembers(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getMembers(next)
  },
  computed: {
    // note we are not passing an array, just one store after the other
    ...mapStores(useMembersStore)
    // use Pinia with map helpers: return the whole store instance to use it in the template;
    // each store will be accessible as its id + 'Store'.

    // By default, Pinia will add the "Store" suffix to the id of each store. You can customize this behavior by calling the setMapStoreSuffix().

    // completely remove the suffix: this.user, this.cart
    // setMapStoreSuffix('')

    // this.user_store, this.cart_store
    // setMapStoreSuffix('_store')

    // Note that store is an object wrapped with reactive, meaning there is no need to write .value after getters but, like props in setup, we cannot destructure it.
  }
}
</script>

<style scoped>

.band-members {
  padding-bottom: 20px;
}

.band-members p {
  text-align: center;
}
.band-pic {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.band-pic img {
  width: -webkit-fill-available;
  max-width: 450px;
  max-height: 300px;
}

.biography p {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: justify;
}
</style>
