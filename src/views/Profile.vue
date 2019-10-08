<template>
  <v-container class="profilepage">
    <v-row>
      <v-col cols="12" md="12" xs="12" class="pb-0">
        <v-card class="mb-2 mx-auto card d-flex flex-column">
          <div class="d-flex flex-column pa-4 pl-12">
            <v-avatar size="150" class="ml-11">
              <img
                class="align-self-start"
                src="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802.jpg?s=150"
                alt="John"
              />
            </v-avatar>
            <p class="ml-10 mt-5 grey--text">PIKACHI PIKACHUSSON</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" xs="12" class="pt-1">
        <v-card class="mb-3 card balance-card d-flex flex-column">
          <div class="my-2">
            <div class="grey--text">NOTE TO SELF</div>
          </div>
          <v-divider />
        </v-card>
        <v-card class="card balance-card d-flex flex-column">
          <div class="my-2">
            <v-btn text small color="grey">Deposit</v-btn>
          </div>
          <v-divider />
          <v-icon class="mx-auto" size="90" color="grey">credit_card</v-icon>
          <div class="balance-font">$ 1240</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" xs="12" class="pt-1">
        <v-card class="mb-4 mx-auto card">
          <div class="ml-2 pa-2 balance-card">
            <div class="grey--text">PROFILE</div>
          </div>
          <v-divider />
          <div class="ma-4 pt-2">
            <div class="mb-2">
              <b class="grey--text mr-4">Name</b>
              {{user.firstName}} {{user.lastName}}
            </div>
            <div class="mb-2 mr-4">
              <b class="grey--text mr-4">Birthday</b>
              {{user.birthday}}
            </div>
            <div>
              <b class="grey--text mr-4">Email</b>
              {{user.email}}
            </div>
          </div>
        </v-card>
        <v-card class="mx-auto card"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => {
      return {
        user: {
          firstName: "John",
          lastName: "Doe",
          birthday: "2019-10-02",
          email: "JohnDoe@gmail.com"
        }
      };
    }
  };
</script>

<style scoped>
  .profilepage {
    display: flex;
    flex-direction: column;
  }

  .card {
    width: 100%;
    min-height: 25vh;
    border-radius: 4;
    padding-top: 0;
    padding-bottom: 0;
  }

  .profile-card-content {
    margin: 1em;
    margin-top: 2em;
  }

  .balance-card {
    text-align: center;
  }

  .balance-font {
    font-size: 30px;
    font-weight: 800;
    color: rgb(117, 117, 117);
    margin-bottom: 0.5em;
  }
</style>
