<template>
  <div id="myOfferSection">
    <h1>My offer</h1>
    <p>
      <b>
        A skilled <span id="mtColor">full stack software developer</span>
        with a strong <span id="mtColor">engineering background.</span>
      </b>
    </p>
    <p>
      <b>I have architected, developed and maintained multiple projects from scratch</b>, participating in the creation
      of their back-end and front-end codebases.
    </p>
    <p><b>I can help you with all sides of your project:</b></p>
    <ul id="competenceList">
      <li>developing the back-end and front-end,</li>
      <li>researching new technologies,</li>
      <li>architecture and wireframing,</li>
      <li>writting technical documentation,</li>
      <li>creating C4 diagrams,</li>
      <li>verifying good UI/UX design,</li>
      <li>mentoring junior teamates,</li>
      <li>estimating tasks,</li>
      <li>communicating with clients.</li>
    </ul>
    <p><i>Call me a Swiss Army Knife in terms of software.</i></p>
    <hr>
    <h2>Technologies</h2>
    <p>
      Languages:
      <img src="https://img.shields.io/badge/(++)-informational?logo=c&logoColor=white&color=659BD3" alt="c/c++">
      <img src="https://img.shields.io/badge/Sharp-informational?logo=c&logoColor=white&color=9B6AD5" alt="c#">
      <img src="https://img.shields.io/badge/Python-informational?logo=python&logoColor=white&color=000000" alt="python">
      <img src="https://img.shields.io/badge/JavaScript-informational?logo=javascript&logoColor=white&color=F7DF1E" alt="javascript">
      <img src="https://img.shields.io/badge/TypeScript-informational?logo=typescript&logoColor=white&color=007ACC" alt="typescript">
      <img src="https://img.shields.io/badge/PHP-informational?logo=php&logoColor=white&color=777BB3" alt="php">
    </p>
    <p>
      Front-end:
      <img src="https://img.shields.io/badge/HTML/CSS-informational?logo=html5&logoColor=white&color=2896CE" alt="Html5/Css3">
      <img src="https://img.shields.io/badge/SASS/SCSS-informational?logo=sass&logoColor=white&color=CC6699" alt="SASS/SCSS">
      <img src="https://img.shields.io/badge/jQuery-informational?logo=jquery&logoColor=white&color=1E78AC" alt="jQuery">
      <img src="https://img.shields.io/badge/Angular-informational?logo=angular&logoColor=white&color=DD0031" alt="Angular">
      <img src="https://img.shields.io/badge/Vue-informational?logo=vue.js&logoColor=white&color=00C180" alt="Vue.js">
      <img src="https://img.shields.io/badge/Nuxt-informational?logo=nuxt.js&logoColor=white&color=2F495E" alt="Nuxt.js">
      <img src="https://img.shields.io/badge/React-informational?logo=react&logoColor=white&color=61DAFB" alt="React">
    </p>
    <p>
      Back-end:
      <img src="https://img.shields.io/badge/Django-informational?logo=django&logoColor=white&color=0F3E2E" alt="Django">
      <img src="https://img.shields.io/badge/ASP.NET-informational?logo=.net&logoColor=white&color=5C2D91" alt="ASP.NET">
      <img src="https://img.shields.io/badge/NodeJS-informational?logo=node.js&logoColor=white&color=339933" alt="Node.js">
    </p>
    <p>
      Other:
      <img src="https://img.shields.io/badge/MySQL-informational?logo=mysql&logoColor=white&color=E48E00" alt="MySQL">
      <img src="https://img.shields.io/badge/PostgreSQL-informational?logo=postgresql&logoColor=white&color=336791" alt="PostgreSQL">
      <img src="https://img.shields.io/badge/MsSQL-informational?logo=microsoft-sql-server&logoColor=white&color=CD283A" alt="MsSQL">
      <img src="https://img.shields.io/badge/MongoDB-informational?logo=mongodb&logoColor=white&color=50B241" alt="MongoDB">
      <img src="https://img.shields.io/badge/Firebase-informational?&logo=firebase&logoColor=f6820d&color=FFCA28" alt="Firebase">
      <img src="https://img.shields.io/badge/AWS-informational?&logo=amazon&logoColor=f6820d&color=232E3D" alt="AWS">
      <img src="https://img.shields.io/badge/Git-informational?logo=git&logoColor=white&color=F05030" alt="Git">
    </p>
    <p style="margin-top: 30px">
      It's important to note that this is just a list of things I'm already familiar with. I'm happy to acquire new skills
      and further increase my knowledge for any potential future projects. The lessons I learned while using these technologies
      will drastically cut my learning curve.
    </p>
    <hr>
    <p>
      If your initial thought is that I can’t be the best in everything, it's okay. Send the architecture job to
      someone else, and I will take care of all the code development, or whatever other role you see me best in.
    </p>
    <p>
      In cases when you already have an existing team, but you could still use some help,
      <NuxtLink id="mtColor" to="/contact">
        <b>contact me</b>
      </NuxtLink> as well.
      I’ll fit in very quickly, I promise.
    </p>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
hr {
  box-sizing: content-box;
  margin: 30px 0;
  height: 1px;
  width: 100%;
  background: #ddd;
  border: none;
}

#myOfferSection {
  padding: 50px;
  max-width: 850px;
  background-color: white;
  color: #555;
}

#myOfferSection h1 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 30px;
}

#myOfferSection h2 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
}

#competenceList li {
  margin-bottom: 8px;
}

#mtColor {
  color: #40748a;
  text-decoration: none;
}

@media screen and (max-width: 1024px){
  #myOfferSection {
    padding: 30px 20px;
  }
}
</style>
