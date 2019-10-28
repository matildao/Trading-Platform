<template>
  <v-app class="main-app">
    <div v-if="getPath() !== '/register' && getPath() !== '/login'" class="app">
      <NavigationSideBar />
      <NavigationBurger />
      <v-content class="app-content">
        <router-view></router-view>
      </v-content>
      <Footer />
    </div>
    <div class="app" v-if="getPath() === '/register' && getPath() !== '/login'">
      <Register />
    </div>
    <div
      class="login"
      v-if="getPath() === '/login' && getPath() !== '/register'"
    >
      <Login />
    </div>
  </v-app>
</template>

<script>
  import NavigationSideBar from "./components/NavigationSideBar";
  import Footer from "./components/Footer";
  import NavigationBurger from "./components/NavigationBurger";
  import Login from "./views/Login";
  import Register from "./views/Register";

  export default {
    name: "App",
    components: {
      NavigationSideBar,
      NavigationBurger,
      Login,
      Register,
      Footer
    },
    data: () => {
      return {
        loggedIn: false,
        register: false
      };
    },
    beforeMount: () => {},
    methods: {
      getPath() {
        return this.$router.history.current.path;
      }
    }
  };
</script>

<style lang="css" scoped>
  .main-app {
    background-color: #dfdfdf !important;
    min-height: 100vh !important;
  }
  html,
  body {
    height: 100%;
  }

  .scroll-area {
    position: relative;
    margin: auto;
    width: 600px;
    height: 400px;
  }

  .app {
    box-shadow: inset 0 5px 0 #8382db;
    display: flex;
    flex-direction: column;
    color: white !important;
    min-height: 100vh !important;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .borderline {
    height: 5px;
    background-color: #8382db;
  }

  .app-content {
    margin: 1em;
    margin-top: 1vh;
    margin-left: 17em;
    min-height: 100vh !important;
    width: 77vw;
    display: flex;
    flex-direction: column;
  }

  .login {
    width: 100%;
    height: 100vh;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    .app {
      flex-direction: column;
    }

    .app-content {
      margin: 0;
      margin-top: 8vh;
      width: 100vw;
    }
  }
</style>
