<template>
  <p class="release-item">
    <img class="release-thumbnail" :src="release?.imageUrl" /><span class="release-title">{{
      release?.title
    }}</span
    ><span class="release-date">Released: {{ formattedDate }}</span
    ><a class="release-url" :href="release?.spotifyUrl" target="_blank">Listen on Spotify</a>
  </p>
</template>

<script lang="ts">
import { dateFormatMixin } from '@/dateFormatMixin'

export default {
  props: {
    release: Object
  },
  mixins: [dateFormatMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.release?.releaseDate)
    }
  }
}
</script>

<style scoped>
.release-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
}
.release-item:last-of-type {
  padding-bottom: 20px;
}
.release-thumbnail {
  width: 300px;
  height: 300px;
  padding-bottom: 10px;
}
.release-title {
  font-weight: bold;
}
</style>
