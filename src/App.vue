<template>
  <div class="navigation" id="nav">
    <div class="nav-option-group">
        <a class="nav-option" href="#experience">Experience</a>
        <a class="nav-option" href="#projects">Projects</a>
        <a class="nav-option" href="#contact-me">Contact</a>
        <a class="nav-option" href="/public/EassonWeisshaar-RESUME-portfolio.pdf" download="EassonWeisshaar-RESUME-portfolio.pdf">Resume</a>
        <a class="nav-option" @click="toggleLoginPhase()" v-if="!loggedIn && !loginPresent">Login</a>
        <a class="nav-option" v-if="loggedIn">
          <router-link  style="text-decoration: none;" to="/post"><span>Post</span></router-link> 
        </a>
        <a class="nav-option" @click="loggedIn = false" v-if="loggedIn">Logout</a>
    </div>
    
  </div>
  <div v-if="loginPresent" class="navigation login-bar">
    <div class="sign-in-fields">
      <div class="field">
        <div class="field-label" >Username</div>
        <input type="text" v-model="this.postCredsData.username"/>
      </div>
      <div class="field">
        <div class="field-label">Password</div>
        <input type="password" v-model="this.postCredsData.password"/>
      </div>
      <div class="field signInButtons">
        <a class="login-button" @click="login()"><img src="./assets/loginBtn.png"/></a>
        <a class="cancel-button" @click="toggleLoginPhase()"><img src="./assets/cancel.png"/></a>
      </div>
    </div>
  </div>
  <HeadCard/>
  <div class="experience-tabs">
    <div class="experiences" id="experience">
      <EXPERIENCE 
        v-for="(experience, i) in experiences" 
        :experiences="experience" 
        :index="i" 
        :key="i" 
        :open="experience.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
  <div id="projects">
    <ProjectCard/>
  </div>
  <div id="contact-me">
    <contactMe/>
  </div>  
  <router-view/>
  <footerBar/>
</template>

<script>
import axios from 'axios'
import HeadCard from "./components/HeadCard.vue";
import ProjectCard from "./components/ProjectsCard.vue";
import EXPERIENCE from "./experiences.vue";
import Professional from "./components/Professional.vue";
import contactMe from "./components/contactMe.vue";
import footerBar from "./components/footer.vue"

export default {
  name: 'App',
  components: {
    HeadCard,
    ProjectCard,
    EXPERIENCE,
    Professional,
    contactMe,
    footerBar
  },
  data() {
    return {
      show: true,
      loginPresent: false,
      loginButtonText: 'Login',
      loggedIn: false,
      loginSuccess: false,
      postCredsData: {
        username: "",
        password: "",
      },
      experiences: [
        {
          title: "Professional Experience",
          open: false
        },
        {
          title: "Academic Experience",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.experiences = this.experiences.map((experience, i) => {
        if (index === i ) {
          experience.open = !experience.open;
        } else {
          experience.open = false;
        }
        return experience;
      });
    },
    toggleLoginPhase () {
      if (this.loginPresent === false) {
        this.loginPresent = true;
      } else if (this.loginPresent === true) {
        this.loginPresent = false;
      }
    },
    async login () {
      await this.validate()
      if (this.loginSuccess == true) {
        this.postCredsData.username='';
        this.postCredsData.password='';
        this.loggedIn = true;
        this.loginPresent = false;
      } else {
        this.postCredsData.password='';
        alert("incorrect credentials")
      }
    },
    async validate() {
      await axios.post('https://3gepi33w9k.execute-api.us-east-2.amazonaws.com/prod/sendCreds', this.postCredsData).then(response => {
        this.loginSuccess = response.data.isSuccessful
        return 0;
      }).catch(err => {
          console.log(err)
          return 0;
      })
      return 0;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1b2727;
}

html {
  scroll-behavior: smooth;
}

body{
  margin: 0;
}

.navigation {
  background-color: #14181896;
  height: 75px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.navigation a, .navigation button {
  text-decoration: none
}

.nav-option {
  margin: 0rem 1rem 0rem 1rem;
  font-weight: 900;
  font-size: large;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  transition: all 0.4s ease;
  color: #d5dddf; 
}

.login {
  justify-self: flex-end;
  margin-right: 50px
}

.nav-option a{
  color: #d5dddf;
  transition: all 0.3s ease;
}

.nav-option button {
  color: #d5dddf;
  transition: all 0.3s ease;
  outline-style: none;
  border: none;
}

.nav-option:hover{
 background-color: #6b8e4e;
 transition: all 0.4s ease;
}

.sign-in-fields {
  display: flex;
  flex-direction: row;
  margin: 0 0 0 1rem;
}

.field-label {
  color: #d5dddf;
  font-size: 600;
  margin: 0px 0px 4px 0;
}

.field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0px 10px;
}

.field input {
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 5px;
}

.signInButtons img {
  height: 1.5rem;
}

.signInButtons a {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2px;
  padding: 4px;
  border-radius: 3px;

  transition: all 0.2s ease;
}

.signInButtons a:hover {
  background-color: #6b8e4e;

  transition: all 0.2s ease;
}

.experience-tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.experiences {
  display: block;
  margin: 15px 0 15px 0;
  padding: 15px 0 15px 0;
  border-radius: 8px;
}

.experiences .title {
  background-color: #3c5148;
  position: relative;
  padding: 10px 0 10px 0;
  color: #b2c5b2;
  font-size: 20px;
  font-weight: 750;
  transition: all 0.4s linear;
  margin-bottom: 10px;
  border-radius: 5px;
}

.experiences .cards {
  background-color: #3c5148;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.experiences.open .title{
  margin-bottom: 0px;
}

.experiences.open .title::after {
  transform: translateX(-10%) translateY(-50%) rotate(0deg);
}

.experiences .title::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateX(-10%) translateY(-50%) rotate(90deg);

  width: 30px;
  height: 30px;
  background-image: url('./assets/reshot-icon-arrow-down-GW5P4C826K.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  

  transition: all 0.2s linear;
}

.experiences.open .cards {
  opacity: 1;
  max-height: none; /* Allow content to grow dynamically */
  height: auto; /* Dynamically adjusts based on content */
  overflow-y: visible; /* Ensures all content is visible */
  background-color: #b2c5b2;
  padding: 0;
}

.experiences.open .title {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: #3c5148;
  background-color: #b2c5b2;
}

@media only screen and (max-width: 950px) {
  .experiences {
    width: 100%;
    margin: 0;
    height: 100%;
  }

  .experiences .title {
    border-radius: 0;
  }
  .nav-option, .nav-option a {
    font-weight: 900;
    padding: 0;
    color: #d5dddf;
  }

  .nav-option:hover {
    background-color: #14181896;
  }

  .nav-option-group {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    justify-content: flex-start;
    align-items: center;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .field {
    width: 35%;
  }

  .field input {
    width: 100%;
    padding: 5px 0 5px 5px;
  }
}

</style>
