<template>
  <div id="contactMeSection">
    <h1>Contact me</h1>
    <p>I am available for hire and open to any ideas of cooperation.</p>
    <div id="contactSectionGroup" style="margin: 30px 0 20px 0">
      <p id="contactSectionLabel">
        E-mail:
      </p>
      <font-awesome-icon id="contactIcon" :icon="['fas', 'envelope']" />
      <a href="mailto:tinzeljar@gmail.com">
        tinzeljar@gmail.com
      </a>
    </div>
    <div id="contactSectionGroup">
      <p id="contactSectionLabel">
        LinkedIn:
      </p>
      <font-awesome-icon id="contactIcon" :icon="['fab', 'linkedin']" />
      <a href="https://www.linkedin.com/in/tin-zeljar/" target="_blank">
        Tin Zeljar
      </a>
    </div>
    <div id="contactSectionGroup">
      <p id="contactSectionLabel">
        GitHub:
      </p>
      <font-awesome-icon id="contactIcon" :icon="['fab', 'github']" />
      <a href="https://github.com/Zheruel" target="_blank">
        Tin Zeljar
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
#contactMeSection {
  padding: 50px;
  max-width: 850px;
  background-color: white;
  color: #555;
}

#contactMeSection h1 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
}

#contactMeSection a {
  text-decoration: none;
  color: #40748a;
}

#contactSectionLabel {
  width: 50px;
  margin: 0 100px 5px 0;
}

#contactSectionGroup {
  display: flex;
  align-items: center;
}

#contactIcon {
  color: #40748a;
  margin-right: 5px;
  font-size: 20px;
}

@media screen and (max-width: 1024px){
  #contactMeSection {
    padding: 30px 20px;
  }

  #contactSectionLabel {
  width: 50px;
  margin: 0 60px 5px 0;
  }
}
</style>
