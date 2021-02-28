<template>
  <div v-if="isLoaded" id="wrapper">
    <div id="sideBar">
      <div id="aboutMe">
        <vs-avatar size="180">
          <img src="~/assets/tin.jpg" alt="Tin with his cute dog">
        </vs-avatar>
        <p id="name">
          Tin Zeljar
        </p>
        <p id="title">
          Full Stack Software Developer
        </p>
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
      isLoaded: false
    }
  },

  mounted () {
    this.$nextTick(() => {
      const loading = this.$vs.loading({
        background: '#000000',
        color: '#fff',
        text: 'Tin Zeljar',
        opacity: '1'
      })

      setTimeout(() => {
        loading.close()
        this.isLoaded = true
      }, 1000)
    })
  }
}
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: white;
  background-color: #000000;
}

body {
  margin: 0;
}

#wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/mountains.jpg");
  background-size: cover;
}

#sideBar {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  height: 100vh;
  width: 20%;
  background: rgba(38, 70, 83, 0.80);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#mainContent {
  height: 100vh;
  width: 80%;
  background: rgba(42, 157, 143, 0.8);
}

#aboutMe {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
}

#name {
  font-weight: bold;
  font-size: 1.5em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#title {
  position: relative;
  top: -32px;
  font-size: 1em;
}

[v-cloak] {
  display: none;
}
</style>
