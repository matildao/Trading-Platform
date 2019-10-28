<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add funds to account balance</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form class="w-100" ref="form">
              <v-slider
                class="mt-10"
                v-model="money"
                step="20"
                min="50"
                max="500"
                ticks="always"
                thumb-label="always"
                tick-size="4"
              />
              <p>
                <b>Funds to add:</b>
                ${{money}}
              </p>
              <v-btn
                color="indigo lighter-2"
                class="mr-4 w-100 login-button white--text"
                @click="addFunds()"
              >Add Funds</v-btn>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { addBalanceToUser, getSpecificUser } from "../../actions/user";

  export default {
    props: ["open", "closeDialog"],
    components: {},
    data: () => {
      return {
        money: 0
      };
    },
    methods: {
      addFunds() {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        addBalanceToUser({
          email: user.email,
          balance: parseInt(this.money),
          current: user.balance
        }).then(() => {
          getSpecificUser(user.email).then(res => {
            const newBalance = JSON.stringify({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              birthday: user.birthday,
              balance: res.balance,
              url: res.picture
            });
            localStorage.setItem("activeUser", newBalance);
            window.location.reload();
          });
        });
      }
    }
  };
</script>

<style scoped>
  .termsconditions {
    overflow: auto;
    width: 100%;
    min-height: 60vh;
    max-height: 60vh;
  }
</style>