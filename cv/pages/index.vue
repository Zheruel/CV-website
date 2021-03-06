<template>
  <div id="hero">
    <h1>Hi, I'm Tin</h1>
    <p>
      a full-stack software developer specialized
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
    <NuxtLink id="nuxtLink" to="/skills">
      <vs-button
        id="heroButton"
        size="xl"
        border
        warn
        square
      >
        Skills
      </vs-button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  components: {}
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
}

h1 {
  font-size: 60px;
}

p {
  width: 650px;
  font-size: 30px;
}
</style>
