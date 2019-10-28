<template>
  <div class="dashboardpage">
    <div class="left-cover-box">
      <v-carousel height="100%" :cycle="true">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </div>
    <div class="right-cover-box">
      <div class="logo-text">
        <img class="logo" src="../assets/poketrade_purple.png" alt />
        Poké Trading
      </div>

      <LoginForm />
    </div>
  </div>
</template>

<script>
  import LoginForm from "../components/LoginForm";

  export default {
    components: {
      LoginForm
    },
    data() {
      return {
        items: [
          {
            src: "/assets/1.jpeg"
          },
          {
            src: "/assets/2.jpeg"
          },
          {
            src: "/assets/3.jpeg"
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .dashboardpage {
    background-color: #29384e;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    margin: 0;
  }

  .left-cover-box {
    width: 60%;
    height: 100vh;
  }

  .right-cover-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 4em;
  }

  .logo {
    margin-bottom: 1em;
    width: 100px;
    -webkit-animation: heartbeat 2s ease-in-out infinite both;
    animation: heartbeat 2s ease-in-out infinite both;
  }
  .logo-text {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 4vh;
    margin-bottom: 4em;
    font-size: 18px;
    font-weight: 800;
    color: white;
    text-align: center;
  }

  .cover-carousel {
    width: 100%;
    height: 100vh;
  }

  .card {
    width: 90%;
    height: 85vh;
  }
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @media (min-width: 960px) {
    .container {
      max-width: 960px;
    }
  }

  @media (max-width: 960px) {
    .left-cover-box {
      display: none;
    }
  }
</style>
