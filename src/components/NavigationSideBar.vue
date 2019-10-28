<template>
  <v-card width="256" class="navbar mx-auto">
    <v-navigation-drawer permanent class="black--text navbar-drawer">
      <v-list-item class="navbar-drawer">
        <v-list-item-content class="profile-item-content">
          <v-list-item-title class="title black--text">
            <img src="/assets/square.png" alt="square" class="square-logo" />
            Pokétrading
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="black--text">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="black--text">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="last-item" @click="dialog=true">
          <v-list-item-icon>
            <v-icon>power_settings_new</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="black--text">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-text class="pt-10">Are you sure you want to logout?</v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
            <v-btn color="green darken-1" text @click="logoutUser()">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        items: [
          { title: "Profile", icon: "person", link: "/profile" },
          { title: "Prices", icon: "assessment", link: "/price" },
          { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
          { title: "Manage", icon: "work", link: "/manage" }
        ],
        right: null
      };
    },
    methods: {
      logoutUser() {
        this.dialog = false;
        localStorage.clear();
        this.$router.push("/login");
      },
      getActiveUserProp(prop) {
        return JSON.parse(localStorage.getItem("activeUser"))[prop];
      }
    }
  };
</script>


<style lang="css" scoped>
  .navbar {
    background-color: #dbdbdb;
    height: 100vh;
    position: fixed;
    z-index: 5;
  }

  .profile-item-box {
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-bottom: 2.5em;
  }

  .profile-item-name {
    margin: auto;
    margin-left: 1em;
  }

  .navbar-drawer {
    color: rgb(216, 216, 216);
    border-radius: 0 !important;
  }

  .balance {
    margin-top: 2em;
    margin-bottom: 2em;
    box-shadow: none;
    padding: 0 !important;
    color: rgb(230, 230, 230) !important;
  }

  .last-item {
    position: relative;
    top: 430px;
  }

  .square-logo {
    width: 30px;
    margin-right: 1em;
  }

  @media only screen and (max-width: 600px) {
    .navbar {
      display: none;
    }
  }
</style>
