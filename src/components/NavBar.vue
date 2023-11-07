<template>
  <nav>
    <RouterLink data-testid="home" to="/">Home</RouterLink>
    <RouterLink data-testid="about" :to="{ name: 'about-view' }">About</RouterLink>
    <RouterLink data-testid="discography" :to="{ name: 'discography-view' }"
      >Discography</RouterLink
    >
    <RouterLink data-testid="events" :to="{ name: 'events-view' }">Events</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: royalblue;
  text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  color: #2c3e50;
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 383px) {
  nav {
    display: grid;
  }
  nav a {
    border: 0;
  }
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
