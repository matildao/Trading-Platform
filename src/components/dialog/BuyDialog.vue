<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline center-text">Transaction</span>
        </v-card-title>
        <v-divider />
        <v-card-text class="ma-auto mt-4">
          <v-container>
            <div class="center-text">Following transaction will be made</div>
            <div class="transfer-asset-div mt-4">
              <div class="mt-4">{{ getBuyer() }}</div>
              <v-icon class="flip-img" size="40">arrow_right_alt</v-icon>
              <img src="../../assets/poketrade_purple.png" class="img" />
            </div>
            <div class="transfer-asset-div">
              <img src="../../assets/coin.png" class="img" />
              <v-icon size="40">arrow_right_alt</v-icon>

              <div class="mt-4">
                <v-icon>account_balance</v-icon>
              </div>
            </div>
          </v-container>
          <v-divider />
          <div class="d-flex flex-column mt-2">
            <p>Total: {{ item.startingPrice }}</p>

            <div></div>
            <v-btn color="purple lighten-2">Confirm Purchase</v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="closeDialog()">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ["open", "closeDialog", "item"],
    data() {
      return {
        buyer: ""
      };
    },
    methods: {
      getBuyer() {
        return JSON.parse(localStorage.getItem("activeUser"))["email"];
      }
    }
  };
</script>

<style lang="css" scoped>
  .img {
    width: 4em;
  }

  .transfer-asset-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }

  .flip-img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .center-text {
    text-align: center;
  }
</style>