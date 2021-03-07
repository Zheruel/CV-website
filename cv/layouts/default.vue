<template>
  <div v-if="isLoaded" id="wrapper">
    <div id="sideBar">
      <div id="sideBarOverlay">
        <div id="menueItems">
          <vs-avatar size="160">
            <img src="~/assets/tin.jpg" alt="Tin with his cute dog">
          </vs-avatar>
          <p id="name">
            Tin Zeljar
          </p>
          <p id="title">
            Full Stack Software Developer
          </p>
          <ul id="linkCollection">
            <NuxtLink id="nuxtLink" to="/portfolio">
              <li>Portfolio</li>
            </NuxtLink>
            <NuxtLink id="nuxtLink" to="/skills">
              <li>Skills</li>
            </NuxtLink>
            <NuxtLink id="nuxtLink" to="/contact">
              <li>Contact me</li>
            </NuxtLink>
            <NuxtLink id="nuxtLink" to="/cv">
              <li>My CV</li>
            </NuxtLink>
          </ul>
          <div id="faIconCollection">
            <a href="mailto:tinzeljar@gmail.com">
              <font-awesome-icon id="faIcon" :icon="['fas', 'envelope']" />
            </a>
            <a href="https://www.linkedin.com/in/tin-zeljar/" target="_blank">
              <font-awesome-icon id="faIcon" :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://github.com/Zheruel" target="_blank">
              <font-awesome-icon id="faIcon" :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="mainContent">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoaded: false,
      active: 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      const loading = this.$vs.loading({
        color: '#fff',
        opacity: '0',
        type: 'points'
      })

      setTimeout(() => {
        loading.close()
        this.isLoaded = true
      }, 1250)
    })
  }
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
  font-style: normal;
}

body {
  margin: 0;
  background-color: #2c3e50;
  transition: background-color 0.6s ease-in-out 0s;
}

#wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

#sideBar {
  display: flex;
  text-transform: uppercase;
  height: 100vh;
  width: 20%;
  background-image: url("~/assets/sidebarbackground.jpg");
  background-size: cover;
  color: white;
}

#sideBarOverlay {
  width: 100%;
  height: 100%;
  background: rgba(38, 70, 83, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#mainContent {
  height: 100vh;
  width: 80%;
  background-image: url("~/assets/nocolormountains.jpg");
  background-size: cover;
}

#menueItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
}

#name {
  font-weight: bold;
  font-size: 22px;
}

#title {
  position: relative;
  top: -32px;
  font-size: 16px;
}

#linkCollection {
  align-self: flex-start;
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin: 50px 0 0 50px;
}

#linkCollection li {
  font-size: 25px;
  margin-bottom: 10px;
}

#linkCollection li:hover {
  color: gray;
}

#nuxtLink {
  text-decoration: none;
  color: white;
}

#faIcon {
  font-size: 35px;
  margin: 50px 5px 0 0;
}

#faIcon:hover {
  color: gray;
}

#faIconCollection a {
  color: white;
}
</style>
