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
            src:
              "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            src:
              "https://images.pexels.com/photos/241544/pexels-photo-241544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            src:
              "https://images.pexels.com/photos/1437866/pexels-photo-1437866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
