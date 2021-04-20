<template>
  <div id="myOfferSection">
    <h1>My offer</h1>
    <p>
      <b>
        A skilled <span id="mtColor">full stack software engineer</span>
        with a strong <span id="mtColor">academic background.</span>
      </b>
    </p>
    <p>
      <b>I have maintained, developed and launched multiple projects from scratch</b>, carrying the development of their
      back-end and front-end codebases.
    </p>
    <p><b>I can help you with all sides of your project:</b></p>
    <ul id="competenceList">
      <li>developing the front-end,</li>
      <li>developing the back-end,</li>
      <li>system/software design & architecture</li>
      <li>database design & implementation,</li>
      <li>researching new technologies,</li>
      <li>verifying good UI/UX design,</li>
      <li>communicating with clients</li>
      <li>mentoring junior teamates</li>
      <li>estimating tasks</li>
      <li>setting up the CI/CD</li>
    </ul>
    <p><i>Call me a Swiss Army Knife in terms of software.</i></p>
    <hr>
    <h2>Technologies</h2>
    <p>
      Front-end:
      <img src="~/assets/html.svg" alt="Html5/Css3">
      <img src="~/assets/sass.svg" alt="SASS/SCSS">
      <img src="~/assets/javascript.svg" alt="javascript">
      <img src="~/assets/typescript.svg" alt="typescript">
      <img src="~/assets/jquery.svg" alt="jQuery">
      <img src="~/assets/angular.svg" alt="Angular">
      <img src="~/assets/vue.svg" alt="Vue.js">
      <img src="~/assets/nuxt.svg" alt="Nuxt.js">
      <img src="~/assets/react.svg" alt="React">
    </p>
    <p>
      Back-end/desktop:
      <img src="~/assets/clang.svg" alt="c/c++">
      <img src="~/assets/csharplang.svg" alt="c#">
      <img src="~/assets/aspnet.svg" alt="ASP.NET">
      <img src="~/assets/python.svg" alt="python">
      <img src="~/assets/django.svg" alt="Django">
      <img src="~/assets/nodejs.svg" alt="Node.js">
      <img src="~/assets/php.svg" alt="php">
    </p>
    <p>
      Database:
      <img src="~/assets/mysql.svg" alt="MySQL">
      <img src="~/assets/postgresql.svg" alt="PostgreSQL">
      <img src="~/assets/mssql.svg" alt="MsSQL">
      <img src="~/assets/mongodb.svg" alt="MongoDB">
      <img src="~/assets/firebase.svg" alt="Firebase">
    </p>
    <p>
      Other:
      <img src="~/assets/aws.svg" alt="AWS">
      <img src="~/assets/git.svg" alt="Git">
    </p>
    <p style="margin-top: 30px">
      It's important to note that this is just a list of things I'm already familiar with. I'm happy to acquire new skills
      and expand my knowledge for any potential future projects. The lessons I learned while using these technologies
      will drastically cut my learning curve.
    </p>
    <p>
      I believe my biggest strengths are my strong problem solving skills and my willingness to adapt to any situation, no matter
      how difficult it may seem.
    </p>
    <hr>
    <p>
      If your initial thought is that I can’t be the best in everything, it's okay. Send the design job to
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

@media screen and (max-width: 1024px){
  #myOfferSection {
    padding: 30px 20px;
  }
}
</style>
