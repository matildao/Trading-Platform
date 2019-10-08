<template>
  <v-container class="dashboardpage">
    <v-row no-gutters>
      <v-card class="mx-auto card monitor">
        <v-row>
          <v-col cols="12" sm="12" md="9" xs="12">
            <SellingCard :changeViewItem="changeViewItem" />
          </v-col>
          <v-col cols="12" sm="7" md="3" xs="12">
            <AvailableCard :chosenData="chosenData" />
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mx-auto card card-bottom">
        <v-card-title>Monitor</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import SellingCard from "../components/dashboard/SellingCard";
  import AvailableCard from "../components/dashboard/AvailableCard";

  export default {
    components: {
      SellingCard,
      AvailableCard
    },
    data: () => {
      return {
        chosenData: ""
      };
    },
    methods: {
      changeViewItem(item) {
        this.chosenData = item;
      }
    }
  };
</script>

<style scoped>
  .dashboardpage {
    display: flex;
    flex-direction: column;
  }

  .monitor {
    padding: 0.2em;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
  }

  .card-bottom {
    background-color: rgb(204, 204, 204);
  }

  .card {
    width: 100%;
    margin-bottom: 1em;
  }
</style>
