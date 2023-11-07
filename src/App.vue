<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
      <div class="page-header">
        <h1>U P P E R C A S E</h1>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.page-header {
  padding-top: 20px;
}

.page-header h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

main h2 {
  text-align: center;
  padding-top: 20px;
}

@media (max-width: 240px) {
  .page-header h1 {
    font-weight: 100;
  }
}

@media (min-width: 241px) and (max-width: 359px) {
  .page-header h1 {
    font-weight: 100;
    font-size: 1.9rem;
  }
}

@media (min-width: 360px) and (max-width: 365px) {
  .page-header h1 {
    font-weight: 300;
  }
}

@media (min-width: 366px) and (max-width: 369px) {
  .page-header h1 {
    font-weight: 400;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    border-right: 1px solid var(--color-border);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 50px;
  }
}
</style>
