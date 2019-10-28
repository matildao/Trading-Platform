<template>
  <div class="loading-screen">
    <img class="bulbasaur-img" src="/assets/bulbasaur.png" alt />
    <div
      class="black--text center"
    >Please wait while Professor Bulbasaur is fetching your data for you</div>
    <v-progress-circular
      class="center mt-8"
      :size="70"
      :width="7"
      color="purple lighten-2"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
  export default {
    name: "loadingscreen",
    data() {
      return {
        isLoading: false,
        interval: {},
        value: 0
      };
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    mounted() {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0);
        }
        this.value += 10;
      }, 1000);
    }
  };
</script>


<style scoped>
  .loading-screen {
    margin: 2em;
  }
  .bulbasaur-img {
    width: 50%;
    display: block;
    margin: auto;
  }

  .center {
    display: block;
    margin: auto;
    text-align: center;
    font-weight: 500;
  }
</style>