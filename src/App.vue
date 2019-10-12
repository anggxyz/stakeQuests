<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="wrap-banner">
      <div class="main-title">
        <h2>
          StakeQuest
        </h2>
        <p class="subtitle">
          An Incentivized Testnet Event
        </p>
        <p class="subtitle">
          Matic Network
        </p>
        <br>
        <button class="button is-info"
            @click="isComponentModalActive = true">
            Register Now
        </button>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus>
            <ModalForm />
        </b-modal>
        <!-- <a class="gh-button" target="_blank" href="https://github.com/creotip/vue-particles"><span class="gh-button__icon"></span>Download</a> -->
        <!-- <a class="button is-light">Register Now</a> -->
        <button class="button is-rounded is-dark" v-scroll-to="'#element'">Know More <span>&nbsp;&nbsp;</span> <font-awesome-icon icon = "angle-down"></font-awesome-icon> </button>
        <!-- <font-awesome-icon icon="ConnectDevelop" /> -->
        <button class="button is-rounded is-dark">Connect with us <span>&nbsp;&nbsp;</span> 
        <!-- <font-awesome-icon icon="comment"> </font-awesome-icon>  -->
        <img src="./assets/discord.png" width= "20"></img>
        </button>
      </div> <!-- main title -->
      <vue-particles
        color="#0B1548"
        :particleOpacity="0.9"
        linesColor="#ffffff"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="12"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>

    </div> <!-- wrap banner-->
    <main-content id= "element"></main-content>
    <!-- <foot></foot> -->
  </div> <!-- app div -->
</template>

<script>

  import Foot from './components/Foot'
  import MainContent from './components/Main'
  import ModalForm from './components/ModalForm'
  export default {
    name: 'app',
    components: {
      Foot,
      MainContent,
      ModalForm
    },
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
        isComponentModalActive: false
      }
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cormorant+Upright|Quicksand&display=swap');

  *, :after, :before {
    box-sizing: border-box;
  }
  .main-title h2 {
      font-size: 7rem;
      // font-family: 'Teko', sans-serif;
      font-family: 'Cormorant Upright', serif;
      text-shadow: 8px 8px #000000;
      // text-transform: uppercase;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 3rem;
      }
    }
  html, body {
    height: 100%;
  }
  button {
    margin: 2px;
  }

  body {
    margin: 0;
    background: #34393f;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  a {
    color: #42b983;
  }

  h3 {
    font-weight: 100;
    font-size: 2rem;
  }

  .white {
    color: #ffffff;
  }


  .particles-js {
    // background-image: url("./assets/sky.jpg");
    background-color: #000000;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }
.main-content {
    background-color: #000000;
  }

  .main-section {
    background-color: #000000;
    max-width: 650px;
    margin: auto;
    padding: 0 1rem;
  }

  .main-title {
    color: #fff;
    z-index: 999;

  
    p.subtitle {
      font-size: 1.7rem;
      font-family: 'Quicksand';
      margin: 0;
      @media (max-width: 767px) {
        font-size: 1rem;
      }
      color: #b4b4b4
    }
  }

  .section-title {
    margin: 2rem 0 0 0;
  }

  .footer {
    margin: 1rem 0;
  }

</style>
