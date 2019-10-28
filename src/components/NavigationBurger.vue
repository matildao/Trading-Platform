<template>
  <div class="navbar">
    <v-app-bar class="toolbar-header" color="white darken-1" dense dark>
      <v-toolbar-title class="black--text">Poké Trading</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    })
  };
</script>


<style scoped>
  .navbar {
    color: rgb(105, 66, 143);
    width: 100%;
    height: 4em;
    position: fixed;
    z-index: 5;
  }

  .toolbar-header {
    box-shadow: none;
    border-bottom: 4px solid rgb(187, 187, 187);
  }

  .menu-button {
    float: right;
  }

  @media only screen and (min-width: 600px) {
    .navbar {
      display: none;
    }
  }
</style>
