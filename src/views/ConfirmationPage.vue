<template>
  <div class="confirmation">
    <v-card
      v-if="!confirmed"
      class="mx-auto px-2 card"
      max-width="600"
      height="400"
    >
      <div class="mt-6">
        <img class="square-img" src="/assets/square.png" />
      </div>
      <div class="center mt-4">
        <h2>Transaction</h2>
        <p>
          You are
          <b>{{ state === "sell" ? "selling" : "buying" }}</b>
          the asset: {{ chosenData.title }}
        </p>Click confirm to
        <b>{{ state === "sell" ? "Sell" : "Buy" }}</b> the asset
        <div class="d-flex flex-column mt-8">
          <div>
            <b>Title</b>
            {{ chosenData.title }}
          </div>
          <div>
            <b>Price</b>
            {{ chosenData.startingPrice }}
          </div>
        </div>
      </div>
      <div>
        <v-divider />
        <v-card-actions class="card-buttons">
          <v-btn color="purple" text @click="$router.go(-1)">Cancel</v-btn>
          <v-btn color="purple" text @click="confirmTransaction()">Confirm</v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-card
      v-else
      class="slide-in-elliptic-top-fwd mx-auto px-2 card"
      max-width="600"
      height="400"
    >
      <v-icon
        size="120"
        color="green accent-3"
        class="mt-4"
      >check_circle_outline</v-icon>
      <div class="center mt-1">
        <h2>Success!</h2>
        <p>Asset was {{ state === "sell" ? "sold" : "bought" }}</p>
        <img
          class="mt-2"
          src="/assets/squirtle.gif"
          alt="squirtle"
          width="90px"
        />
      </div>
      <div>
        <v-divider />
        <v-card-actions>
          <v-btn color="purple" text @click="takeMeBack()">Take Me Back</v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-snackbar v-model="snackbar">
      Oops! something went wrong. Try again later.
      <v-btn color="red" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <NotEnoughBalanceDialog :open="open" :closeDialog="onDialogClose" />
  </div>
</template>

<script lang="ts">
  import { buyProduct, sellProduct } from "../actions/product";
  import NotEnoughBalanceDialog from "../components/dialog/NotEnoughBalanceDialog";

  export default {
    name: "confirmation",
    components: {
      NotEnoughBalanceDialog
    },
    data() {
      return {
        chosenData: [],
        confirmed: false,
        state: window.location.pathname.includes("sell") ? "sell" : "buy",
        user: JSON.parse(localStorage.getItem("activeUser")),
        snackbar: false,
        open: false
      };
    },
    beforeMount() {
      this.chosenData = JSON.parse(localStorage.getItem("transactionData"));
    },
    methods: {
      takeMeBack() {
        this.$router.push("/manage");
      },
      checkIfBalanceCovers(balance, price) {
        return balance - price < 0 ? true : false;
      },
      confirmTransaction() {
        if (this.state === "buy") {
          let dataToSend = {
            email: this.user.email,
            title: this.chosenData.title,
            productId: this.chosenData.id,
            balance: this.user.balance,
            price: this.chosenData.startingPrice
          };

          if (
            !this.checkIfBalanceCovers(
              this.user.balance,
              this.chosenData.startingPrice
            )
          ) {
            buyProduct(dataToSend).then(res => {
              if (res.status === 202) {
                localStorage.setItem(
                  "activeUser",
                  JSON.stringify({
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    birthday: this.user.birthday,
                    balance: res.balance,
                    url: this.user.url
                  })
                );
                this.confirmed = true;
              } else {
                this.snackbar = true;
              }
            });
          } else {
            this.open = true;
          }
        } else {
          let dataToSend = {
            email: this.user.email,
            title: this.chosenData.title,
            depositId: this.chosenData.depositId,
            balance: this.user.balance,
            price: this.chosenData.startingPrice,
            productId: this.chosenData.productId
          };

          sellProduct(dataToSend).then(res => {
            if (res.status === 200) {
              localStorage.setItem(
                "activeUser",
                JSON.stringify({
                  firstName: this.user.firstName,
                  lastName: this.user.lastName,
                  email: this.user.email,
                  birthday: this.user.birthday,
                  balance: res.balance,
                  url: this.user.url
                })
              );
              this.confirmed = true;
            } else {
              this.snackbar = true;
            }
          });
        }
      },
      onDialogClose() {
        this.open = false;
        this.checkbox = true;
      }
    }
  };
</script>


<style scoped>
  .confirmation {
    margin: 2em;
  }
  .square-img {
    width: 50px;
    height: 50px;
    display: block;
    margin: auto;
    margin-bottom: 0.5em;
  }
  .card {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .center {
    text-align: center;
  }

  .slide-in-elliptic-top-fwd {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
  }

  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>