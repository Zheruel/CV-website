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
            Working closely with the clients to define both technical and business requirements.
          </li>
          <li>
            Researching new tools & technologies.
          </li>
          <li>
            Taking care of all of the System/Software Design & Architecture for the project.
          </li>
          <li>
            Leading the development effort together with project and account managers.
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
            Initially worked on various projects using full stack technologies.
          </li>
          <li>
            Later worked as part of a team that developed and maintained an enterprise level web application used by the
            croatian government (<a id="mtColor" href="https://efondovi.mrrfeu.hr/MISCMS">e-fondovi</a>)
            which was the most important project of the company at the time.
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
            <p>Bachelor Of Information Technology, GPA: 87.1/100</p>
            <p><i>2017-2020</i></p>
          </div>
        </div>
        <ul id="responsibilityList">
          <li>
            Bachelor's thesis was noted for excellence by the commission.
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <h3>Projects</h3>
    <div id="projectMain">
      <div id="projectContent">
        <div id="projectTitle">
          <a id="mtColor">
            Menza Scraper
          </a>
        </div>
        <div id="projectDescription">
          Web Scraping tool created using C# and Windows Forms. It's a completely browserless scraper and it uses the system.net.http
          library for sending HTTP requests and the HTML Agility Pack for parsing scraped information.
          This project is not made using any official API. It uses my own exploit to grab student receipt information.
          Scraped information is saved into a XML document and the GUI lets you perform some basic data filtering & analysis.
        </div>
        <div id="technologyContainer">
          <div id="technologyTitle">
            Technologies
          </div>
          <div id="technologyList">
            <img alt="Python" src="~/assets/csharp.svg">
          </div>
        </div>
        <a
          href="https://github.com/Zheruel/PHP-News-Website"
          target="__blank"
        >
          <vs-button
            class="codeButton"
            size="l"
          >
            <font-awesome-icon class="codeIcon" :icon="['fab', 'github']" />
            See More
          </vs-button>
        </a>
      </div>
      <div id="projectImage">
        <img src="~/assets/menzascraper.jpg" alt="Menza Scraper">
      </div>
    </div>
    <hr>
    <div id="projectMain">
      <div id="projectContent">
        <div id="projectTitle">
          <a id="mtColor">
            News Website
          </a>
        </div>
        <div id="projectDescription">
          News Website with an admin panel, categories, articles and more created using PHP as the back-end and and HTML/CSS + vanilla
          JavaScript as the front-end. This project also uses a MySQL database and it was my final assignment for the Web Application
          Programming class while pursuing my degree.
        </div>
        <div id="technologyContainer">
          <div id="technologyTitle">
            Technologies
          </div>
          <div id="technologyList">
            <img alt="Python" src="~/assets/php.svg">
            <img alt="MySQL" src="~/assets/mysql.svg">
          </div>
        </div>
        <a
          href="https://github.com/Zheruel/PHP-News-Website"
          target="__blank"
        >
          <vs-button
            class="codeButton"
            size="l"
          >
            <font-awesome-icon class="codeIcon" :icon="['fab', 'github']" />
            See More
          </vs-button>
        </a>
      </div>
      <div id="projectImage">
        <img src="~/assets/tvzvijesti.jpg" alt="News Website">
      </div>
    </div>
    <hr>
    <div id="projectMain">
      <div id="projectContent">
        <div id="projectTitle">
          <a id="mtColor" href="https://github.com/Zheruel/Python-hangman">
            Python Hangman
          </a>
        </div>
        <div id="projectDescription">
          Playable hangman game created using Python. It uses the Requests library to scrape a list of the most common words
          from the internet and then the BeautifulSoup library to parse the scraped HTML code and create a list of the words to be used
          for the game.
        </div>
        <div id="technologyContainer">
          <div id="technologyTitle">
            Technologies
          </div>
          <div id="technologyList">
            <img alt="Python" src="~/assets/python.svg">
          </div>
        </div>
        <a
          href="https://github.com/Zheruel/PHP-News-Website"
          target="__blank"
        >
          <vs-button
            class="codeButton"
            size="l"
          >
            <font-awesome-icon class="codeIcon" :icon="['fab', 'github']" />
            See More
          </vs-button>
        </a>
      </div>
      <div id="projectImage">
        <img src="~/assets/hangman.jpg" alt="Python Hangman">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
#projectMain {
  display: flex;
  flex-direction: row;
}

#projectContent {
  width: 50%;
}

#projectImage {
  width: 50%;
  padding-left: 50px;
}

#projectImage img{
  max-width: 100%;
  max-height: 568px;
}

#projectTitle {
  font-weight: 500;
  font-size: 22px;
}

#projectDescription {
  margin-top: 20px;
}

#technologyTitle {
  font-size: 13px;
  text-transform: uppercase;
  padding-bottom: .5em;
}

#technologyContainer {
  margin-top: 20px;
}

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

.codeIcon {
  margin-right: 5px;
}

.codeButton {
  margin-top: 20px;
}

@media screen and (max-width: 1024px){
  #portfolioSection{
    padding: 30px 20px;
  }

  #projectMain {
    flex-direction: column;
  }

  #projectContent {
    width: 100%;
  }

  #projectImage {
    width: 100%;
    padding-left: 0;
  }
}
</style>
