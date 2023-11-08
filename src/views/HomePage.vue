<template>
  <div class="home">
    <h2>Welcome to the Official Website!</h2>
    <div class="band-logo">
      <img src="/UPPERCASE-logo.png" />
    </div>
    <div class="home-content">
      <p>
        UPPERCASE is a Filipino-Canadian indie pop rock band from Toronto, Canada pursuing Original
        Pilipino Music (OPM).
      </p>
      <p>
        Check out the band's music on
        <a href="https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB" target="blank">Spotify</a>!
      </p>
      <p>
        Follow the band on
        <a href="https://www.instagram.com/ang.bandang.uppercase/" target="blank">Instagram</a>!
      </p>
      <p>
        Like and Share on
        <a href="https://www.facebook.com/ang.bandang.uppercase/" target="blank">Facebook</a>!
      </p>
    </div>
  </div>
</template>

<style scoped>
.band-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.band-logo img {
  width: -webkit-fill-available;
  max-width: 450px;
  max-height: 300px;
}

.home-content p {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

@media (min-width: 1024px) {
  .band-logo img {
    width: 450px;
    height: 300px;
  }
}
</style>
