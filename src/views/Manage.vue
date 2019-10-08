<template>
  <v-container class="profilepage">
    <v-row no-gutters>
      <div class="card">
        <v-row>
          <v-col cols="12" sm="12" md="12" xs="12">
            <Sell />
          </v-col>
          <v-col cols="12" sm="7" md="6" xs="12"></v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>


<script>
  import Sell from "../components/manage/Sell";

  export default {
    components: {
      Sell
    },
    data: () => {
      return {
        user: {
          firstName: "John",
          lastName: "Doe",
          birthday: "2019-10-02",
          email: "JohnDoe@gmail.com"
        },
        open: false
      };
    }
  };
</script>

<style scoped>
  .profilepage {
    display: flex;
    height: 95vh;
    flex-direction: column;
  }

  .card {
    width: 100%;
    height: 95vh;
    padding: 1em;
    border-radius: 0;
  }

  .mini-card {
    width: 100%;
    height: 88vh;
    padding: 1em;
  }
</style>
