<template>
  <div v-if="isLoaded" id="wrapper">
    <div id="mobileNav">
      <NuxtLink id="nuxtLink" to="/">
        Home
      </NuxtLink>
      <div v-if="showMobileMenu" id="mobileNavLinks" @click="closeMobile()">
        <NuxtLink id="nuxtLink" to="/portfolio">
          Portfolio
        </NuxtLink>
        <NuxtLink id="nuxtLink" to="/myoffer">
          My Offer
        </NuxtLink>
        <NuxtLink id="nuxtLink" to="/contact">
          Contact me
        </NuxtLink>
        <a id="nuxtLink" href="https://drive.google.com/file/d/1rlqsZ7fER3EZJ4cWicx-g_y1o3CBoj7D/view?usp=sharing" target="__blank">
          My cv
        </a>
      </div>
      <font-awesome-icon id="mobileNavIcon" :icon="['fa', 'bars']" @click="toggleMobile()" />
    </div>
    <div id="sideBar">
      <div id="sideBarOverlay">
        <div id="menueItems">
          <NuxtLink id="nuxtLink" to="/">
            <img id="tinAvatar" src="~/assets/tin.jpg" alt="Tin with his cute dog">
          </NuxtLink>
          <p id="name">
            Tin Zeljar
          </p>
          <p id="title">
            Full Stack Software Engineer
          </p>
          <ul id="linkCollection">
            <NuxtLink id="nuxtLink" to="/portfolio">
              <li :class="{ 'muted' : getActiveCategory == 1}">
                Portfolio
              </li>
            </NuxtLink>
            <NuxtLink id="nuxtLink" to="/myoffer">
              <li :class="{ 'muted' : getActiveCategory == 2}">
                My Offer
              </li>
            </NuxtLink>
            <NuxtLink id="nuxtLink" to="/contact">
              <li :class="{ 'muted' : getActiveCategory == 3}">
                Contact me
              </li>
            </NuxtLink>
            <a id="nuxtLink" href="https://drive.google.com/file/d/1rlqsZ7fER3EZJ4cWicx-g_y1o3CBoj7D/view?usp=sharing" target="__blank">
              <li>
                My CV
              </li>
            </a>
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
    <div id="mainContent" :class="getActiveCategory == 0 ?'mountainBackground':'gradientBackground'">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoaded: false,
      showMobileMenu: false
    }
  },

  computed: {
    getActiveCategory () {
      return this.$store.state.activeCategory
    }
  },

  watch: {
    $route () {
      switch (this.$nuxt.$route.name) {
        case 'index':
          this.setActiveCategory(0)
          this.showMobileMenu = false
          break
        case 'portfolio':
          this.setActiveCategory(1)
          break
        case 'myoffer':
          this.setActiveCategory(2)
          break
        case 'contact':
          this.setActiveCategory(3)
          break
      }
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
      }, 1500)

      switch (this.$nuxt.$route.name) {
        case 'index':
          this.setActiveCategory(0)
          break
        case 'portfolio':
          this.setActiveCategory(1)
          break
        case 'myoffer':
          this.setActiveCategory(2)
          break
        case 'contact':
          this.setActiveCategory(3)
          break
      }
    })
  },

  methods: {
    toggleMobile () {
      this.showMobileMenu = !this.showMobileMenu
    },

    closeMobile () {
      this.showMobileMenu = false
    },

    setActiveCategory (number) {
      this.$store.commit('setActive', number)
    }
  }
}
</script>

<style>
#mobileNav {
  display: none;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #2c3e50;
  transition: background-color 0.6s ease-in-out 0s;
}

#wrapper {
  display: flex;
}

#tinAvatar {
  width: 152px;
  height: 152px;
  border-radius: 50%;
}

#sideBar {
  display: flex;
  text-transform: uppercase;
  height: 100vh;
  width: 20%;
  background-image: url("~/assets/sidebarbackground.jpg");
  background-size: cover;
  color: white;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

#sideBarOverlay {
  width: 100%;
  height: 100%;
  background: rgba(38, 70, 83, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#mainContent {
  min-height: 100vh;
  width: 80%;
}

.mountainBackground {
  background-image: url("~/assets/nocolormountains.jpg");
  background-size: cover;
}

.gradientBackground {
  background-color: whitesmoke;
}

#menueItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
}

#name {
  margin-top: 10px;
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
  font-size: 22px;
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
  color: white;
}

#faIcon:hover {
  color: gray;
}

.muted {
  color: gray;
}

hr {
  box-sizing: content-box;
  margin: 30px 0;
  height: 1px;
  width: 100%;
  background: #ddd;
  border: none;
}

#mtColor {
  color: #40748a;
  text-decoration: none;
}

@media only screen and (max-width: 1536px) {
  #name {
    font-size: 20px;
  }

  #title {
    font-size: 14px;
  }
}

@media only screen and (max-width: 1366px) {
  #name {
    font-size: 18px;
  }

  #title {
    font-size: 12px;
  }
}

@media only screen and (max-width: 1024px) {
  #wrapper {
    flex-direction: column;
  }

  #sideBar {
    display: none;
  }

  #mainContent {
    width: 100%;
  }

  #mobileNav {
    display: flex;
    justify-content: center;
    min-height: 45px;
    flex-direction: column;
    padding: 5px;
  }

  #mobileNav a{
    padding: 10px;
  }

  #mobileNav a:hover{
    background-color: gray;
  }

  #mobileNavIcon {
    font-size: 32px;
    position: absolute;
    right: 6px;
    top: 10px;
  }

  #mobileNavIcon:hover {
    color: gray;
  }

  #mobileNavLinks {
    display: flex;
    flex-direction: column;
  }
}
</style>
