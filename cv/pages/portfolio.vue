<template>
  <div id="portfolioSection">
    <h1>Portfolio</h1>
    <p><b>Currently open to co-operation on new and existing projects.</b></p>
    <p>
      <NuxtLink id="mtColor" to="/contact">
        <b>Contact me.</b>
      </NuxtLink> I will answer you in ~24 hours.
    </p>
    <hr>
    <h2>Experience</h2>
    <div id="experienceGroup">
      <div id="experienceItem">
        <div id="positionWrapper">
          <img id="logo" src="~/assets/fsp.jpg" alt="FSP logo">
          <div id="positionInfo">
            <p><a href="https://www.farshore.com/" target="_blank"> Farshore Partners </a></p>
            <p>Software Architect</p>
            <p><i>November 2020 - Present</i></p>
          </div>
        </div>
        <ul id="responsibilityList">
          <li>
            Handling full software project lifecycles from the initial discussion with the clients to
            defining both technical and business requirements.
          </li>
          <li>
            Producing wireframes and technical specifications.
          </li>
          <li>
            Recommending appropriate technologies and architectural solutions to the presented problem.
          </li>
          <li>
            Providing guidance and support to the development team.
          </li>
        </ul>
      </div>
      <div id="experienceItem">
        <div id="positionWrapper">
          <img id="logo" src="~/assets/omega.jpg" alt="Omega logo">
          <div id="positionInfo">
            <p><a href="https://www.omega-software.hr/" target="_blank"> Omega Software </a></p>
            <p>Junior Full Stack Software Developer</p>
            <p><i>February 2020 - November 2020</i></p>
          </div>
        </div>
        <ul id="responsibilityList">
          <li>
            Initially worked on small scale Full Stack projects.
          </li>
          <li>
            Later worked on developing and maintaining an enterprise level web application used by the
            croatian government (e-fondovi) which was one of the companys' most important projects.
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <h3>Education</h3>
    <div id="experienceGroup">
      <div id="experienceItem">
        <div id="positionWrapper">
          <img id="logo" src="~/assets/tvz.svg" alt="TVZ logo">
          <div id="positionInfo">
            <p><a href="https://www.tvz.hr/" target="_blank"> Zagreb University Of Applied Sciences </a></p>
            <p>Bachelor Of Information Technology</p>
            <p><i>2017-2020</i></p>
          </div>
        </div>
        <ul id="responsibilityList">
          <li>
            Simultaneously worked as a Software Developer in the industry.
          </li>
          <li>
            Bachelor's thesis was noted for excellence by the commission.
          </li>
          <li>
            Created many interesting side projects.
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <h3>Projects</h3>
    <p>Coming in a few days (for now check my GitHub)</p>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
#portfolioSection {
  padding: 50px;
  max-width: 1400px;
  background-color: white;
  color: #555;
}

#portfolioSection h1 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
}

#portfolioSection h2 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
}

#portfolioSection h3 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
}

#experienceItem {
  margin-bottom: 30px;
}

#positionWrapper {
  display: flex;
  align-items: center;
}

#positionInfo a {
  text-decoration: none;
  color: #40748a;
  font-weight: bold;
}

#positionInfo p {
  margin: 0 0 4px 0;
}

#logo {
  height: 50px;
  width: 50px;
  margin-right: 10px;
}

#responsibilityList li {
  margin-bottom: 3px;
}

@media screen and (max-width: 1024px){
  #portfolioSection{
    padding: 30px 20px;
  }
}
</style>
