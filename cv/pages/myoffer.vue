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
      <li>developing the back-end and front-end,</li>
      <li>system/software design & architecture,</li>
      <li>database design & implementation,</li>
      <li>researching tools & technologies,</li>
      <li>verifying good UI/UX design,</li>
      <li>communicating with clients,</li>
      <li>mentoring the team,</li>
      <li>estimating tasks,</li>
      <li>setting up the CI/CD,</li>
      <li>leading, launching and monitoring the project.</li>
    </ul>
    <p><i>Call me a Swiss Army Knife in terms of software.</i></p>
    <hr>
    <h2>Technologies</h2>
    <p>
      <b>Front-end:</b>
      <img alt="HTML/CSS" src="~/assets/html.svg">
      <img alt="SASS/SCSS" src="~/assets/sass.svg">
      <img alt="JavaScript" src="~/assets/javascript.svg">
      <img alt="TypeScript" src="~/assets/typescript.svg">
      <img alt="jQuery" src="~/assets/jquery.svg">
      <img alt="Angular" src="~/assets/angular.svg">
      <img alt="Vue" src="~/assets/vue.svg">
      <img alt="Nuxt" src="~/assets/nuxt.svg">
    </p>
    <p>
      <b>Back-end/desktop:</b>
      <img alt="C++" src="~/assets/c++.svg">
      <img alt="C#" src="~/assets/csharp.svg">
      <img alt="ASP.NET" src="~/assets/aspnet.svg">
      <img alt="Python" src="~/assets/python.svg">
      <img alt="Django" src="~/assets/django.svg">
      <img alt="Node" src="~/assets/node.svg">
      <img alt="PHP" src="~/assets/php.svg">
    </p>
    <p>
      <b>Database:</b>
      <img alt="MySQL" src="~/assets/mysql.svg">
      <img alt="PostgreSQL" src="~/assets/postgresql.svg">
      <img alt="MSSQL" src="~/assets/mssql.svg">
      <img alt="MongoDB" src="~/assets/mongodb.svg">
    </p>
    <p>
      <b>Other:</b>
      System/Software Design & Architecture,
      Git,
      Postman,
      Balsamiq,
      Amazon Web Services,
      Google FireBase,
      Docker.
    </p>
    <p style="margin-top: 30px">
      It's important to note that this is just a list of things I'm already familiar with. I can easily get used to
      different technologies for any potential future projects in a matter of days. The lessons I learned while using these technologies
      always drastically cut my learning curve. I look at life as a continous learning process and am always striving to get better.
    </p>
    <p>
      The most valuable things that I bring to the table are my strong problem solving & communication skills. They let me focus on the
      big picture and come up with creative solutions for any roadblocks on the way. I make sure that the projects I work on always
      have continous and consistent progress.
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
