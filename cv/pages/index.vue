<template>
  <div id="hero">
    <h1 id="announceTin">
      Hi, I'm Tin
    </h1>
    <p id="describeTin">
      a skilled software developer specialized
      in both <b>front-end</b> and <b>back-end</b>
    </p>
    <NuxtLink id="nuxtLink" to="/portfolio">
      <vs-button
        id="heroButton"
        size="xl"
        border
        warn
        square
      >
        Portfolio
      </vs-button>
    </NuxtLink>
    <NuxtLink id="nuxtLink" to="/myoffer">
      <vs-button
        id="heroButton"
        size="xl"
        border
        warn
        square
      >
        My Offer
      </vs-button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveCategory (number) {
      this.$store.commit('setActive', number)
    }
  }
}
</script>

<style>
#hero {
  margin: 100px 0px 0px 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
}

#heroButton {
  width: 150px;
  margin-bottom: 8px;
}

#announceTin {
  font-size: 60px;
}

#describeTin {
  max-width: 650px;
  font-size: 30px;
}
</style>
