<template>
  <div class="network-issue">
    <h1>Uh-Oh!</h1>
    <h3>Unable to retrieve page content.</h3>
    <RouterLink class="back" :to="{ name: 'home-view' }">Back to the home page</RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'network-issue'
}
</script>

<style scoped>
.network-issue {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
