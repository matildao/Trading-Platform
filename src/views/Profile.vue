<template>
  <v-container class="profilepage">
    <v-row>
      <v-col cols="12" md="4" xs="12" sm="10" class="pt-1">
        <v-card class="mb-3 card balance-card d-flex flex-column">
          <div class="my-2">
            <div class="d-flex flex-column pa-4 profile-card-content">
              <v-avatar size="150" class="profile-pic">
                <img :src="getActiveUserProp('url')" alt="Profile" />
              </v-avatar>
              <p
                class="mt-5 grey--text"
              >{{getActiveUserProp("firstName") + " " +getActiveUserProp("lastName")}}</p>
            </div>
          </div>
          <v-divider />
        </v-card>
        <v-card class="card mb-5 balance-card">
          <div class="my-2 pt-2">
            <h3>Credit Card</h3>
          </div>
          <v-divider />
          <img
            class="credit-card-img"
            src="/assets/credit-card.png"
            alt="credit card"
          />
        </v-card>
      </v-col>
      <v-col cols="12" md="7" xs="12" sm="10" lg="8" class="pt-1">
        <v-card class="mb-4 mx-auto card">
          <div class="ml-2 pa-2 balance-card">
            <div class="grey--text">PROFILE</div>
          </div>
          <v-divider />
          <div class="ma-4 pt-2">
            <div class="mb-2">
              <b class="grey--text mr-4">Name</b>
              {{getActiveUserProp("firstName") + " " +getActiveUserProp("lastName")}}
            </div>
            <div class="mb-2 mr-4">
              <b class="grey--text mr-4">Birthday</b>
              {{getActiveUserProp("birthday")}}
            </div>
            <div>
              <b class="grey--text mr-4">Email</b>
              {{getActiveUserProp("email")}}
            </div>
          </div>
        </v-card>
        <div class="d-flex flex-row">
          <v-card class="card balance-card d-flex flex-column mr-4">
            <div class="my-2">
              <v-btn
                text
                id="add-balance-button"
                small
                color="grey"
                @click="open=true"
              >Add Funds</v-btn>
            </div>
            <v-divider />
            <v-icon class="mx-auto" size="90" color="grey">credit_card</v-icon>
            <div class="balance-font">$ {{getActiveUserProp("balance")}}</div>
          </v-card>
          <v-card class="mx-auto card px-12 pt-10">
            <v-text-field v-model="code" label="Promo Code" />
            <v-btn>Validate</v-btn>
            <p
              class="grey--text mt-4"
            >Promo codes gives you the chance to spin the wheel for extra luck.</p>
          </v-card>
        </div>

        <AddBalanceDialog :open="open" :closeDialog="onDialogClose" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AddBalanceDialog from "../components/dialog/AddBalanceDialog";

  export default {
    components: {
      AddBalanceDialog
    },
    data: () => {
      return {
        open: false,
        code: ""
      };
    },
    methods: {
      getActiveUserProp(prop) {
        return JSON.parse(localStorage.getItem("activeUser"))[prop];
      },
      onDialogClose() {
        this.open = false;
      }
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
    display: flex;
    flex-direction: column;
    align-content: center;
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

  .profile-pic {
    margin: auto;
    text-align: center;
  }

  .credit-card-img {
    width: 250px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .credit-card-img:hover {
    cursor: pointer;
  }
</style>
