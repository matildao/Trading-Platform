<template>
  <v-card width="256" class="navbar mx-auto">
    <v-navigation-drawer
      permanent
      class="white--text navbar-drawer"
      color="blue-grey darken-4 "
    >
      <v-list-item class="navbar-drawer">
        <v-list-item-content class="profile-item-content">
          <v-list-item-title class="title white--text">Pokétrading</v-list-item-title>
          <div class="profile-item-box">
            <v-avatar>
              <img
                src="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802.jpg?s=80"
                alt="John"
              />
            </v-avatar>
            <v-list-item-subtitle
              class="white--text profile-item-name"
            >Pikachu Pikachusson</v-list-item-subtitle>
          </div>
          <v-card class="mx-auto balance">
            <v-card-text class="white--text">Balance: $ 60</v-card-text>
          </v-card>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="white--text">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="white--text">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { title: "Profile", icon: "person", link: "/profile" },
          { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
          { title: "Manage", icon: "work", link: "/manage" },
          { title: "Settings", icon: "notifications", link: "/settings" }
        ],
        right: null
      };
    }
  };
</script>


<style lang="css" scoped>
  .navbar {
    background-color: #575757;
    min-height: 100vh;
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
    background-color: rgb(107, 107, 107) !important;
    opacity: 0.5;
    color: rgb(230, 230, 230) !important;
  }

  @media only screen and (max-width: 600px) {
    .navbar {
      display: none;
    }
  }
</style>
