<template>
  <v-app>
    <div class="app" v-if="loggedIn">
      <NavigationSideBar />
      <NavigationBurger />
      <v-content class="app-content">
        <router-view></router-view>
      </v-content>
    </div>
    <div v-else class="login">
      <Login />
    </div>
  </v-app>
</template>

<script>
  import NavigationSideBar from "./components/NavigationSideBar";
  import NavigationBurger from "./components/NavigationBurger";
  import Login from "./views/Login";
  import router from "./router";

  const test = true;
  const page = "re";

  export default {
    name: "App",
    components: {
      NavigationSideBar,
      NavigationBurger,
      Login
    },
    data: () => {
      return {
        loggedIn: true
      };
    },
    beforeMount: () => {
      if (!test && page !== "login") {
        router.push("login");
      }
    }
  };
</script>

<style lang="css" scoped>
  .app {
    box-shadow: inset 0 5px 0 #8382db;
    display: flex;
    flex-direction: row;
    color: white !important;
    background-color: #c4c4c4;
  }

  .borderline {
    height: 5px;
    background-color: #8382db;
  }

  .app-content {
    margin: 1em;
    margin-top: 1vh;
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
    }
  }
</style>
