<template>
  <div class="registerpage">
    <div class="mb-2">
      <v-btn text icon color="pink" @click="back()">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>Take me back
    </div>

    <v-card class="pa-6 card">
      <v-card-title class="center">Register</v-card-title>
      <RegisterForm />
    </v-card>
  </div>
</template>

<script>
  import RegisterForm from "../components/RegisterForm";

  export default {
    components: {
      RegisterForm
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
    },
    methods: {
      back() {
        this.$router.push("/login");
        window.location.reload();
      }
    }
  };
</script>

<style scoped>
  .registerpage {
    background-color: #29384e;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 1em;
  }

  .logo {
    margin-bottom: 1em;
    width: 100px;
  }

  .card {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 800px) {
    .card {
      width: 100%;
    }

    .registerpage {
      height: 100%;
    }
  }
</style>
