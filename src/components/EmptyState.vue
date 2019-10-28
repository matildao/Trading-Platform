<template>
  <div class="empty-state">
    <v-icon
      class="mx-auto"
      size="150"
      color="deep-purple lighten-3"
    >sentiment_very_dissatisfied</v-icon>
    <h2 id="title" class="grey--text">{{ title }}</h2>
    <p id="description" class="grey--text">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: ["title", "description", "icon"],
    data: () => {
      return {
        disable: false,
        open: false
      };
    }
  };
</script>

<style scoped>
  .empty-state {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
