<template>
  <p class="event-item">
    <span class="event-title">{{ event?.title }}</span
    ><span class="event-date">{{ formattedDate }}</span
    ><span class="event-location">{{ event?.location }}</span
    ><span class="event-content" v-html="event?.content"></span>
    <a class="event-url" :href="event?.externalUrl" target="_blank">Learn more</a>
  </p>
</template>

<script lang="ts">
import { dateFormatMixin } from '@/dateFormatMixin'

export default {
  props: {
    event: Object
  },
  mixins: [dateFormatMixin],
  computed: {
    formattedDate() {
      return this.formatDate(this.event?.date)
    }
  }
}
</script>

<style scoped>
.event-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
}

.event-item:last-of-type {
  padding-bottom: 20px;
}

.event-title {
  font-weight: bold;
  text-align: center;
}

.event-content {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
}
</style>
