<template>
  <v-container class="managepage">
    <v-row no-gutters>
      <div class="card">
        <v-row>
          <v-col cols="12" sm="10" md="11" xs="12" lg="12">
            <v-card class="sell-card">
              <Sell :changeViewItem="changeViewItem" />
            </v-card>
          </v-col>
          <v-col cols="12" sm="10" md="11" xs="12" lg="12">
            <AssetCard :chosenData="chosenData" />
          </v-col>
          <v-col cols="12" sm="10" md="11" xs="12" lg="12">
            <v-card-title id="#my-transactions" class="black--text">
              My Transactions
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon
                    size="20"
                    class="ml-2 black--text"
                    v-on="on"
                  >help_outline</v-icon>
                </template>
                <span>Transaction history shows the last 5 transactions made</span>
              </v-tooltip>
            </v-card-title>
            <TransactionHistoryCard :history="myHistoryData" />
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>


<script>
  import Sell from "../components/manage/Sell";
  import AssetCard from "../components/manage/AssetCard";
  import { getProductsForSpecificUser } from "../actions/product";
  import TransactionHistoryCard from "../components/TransactionHistoryCard";
  import { getSpecificUsersTransactions } from "../actions/history";

  export default {
    components: {
      Sell,
      AssetCard,
      TransactionHistoryCard
    },
    data: () => {
      return {
        sorted: {
          title: { sort: false, icon: "arrow_upward" },
          amount: { sort: false, icon: "arrow_upward" }
        },
        open: false,
        stock: [],
        myHistoryData: [],
        chosenData: ""
      };
    },
    beforeMount() {
      let ownerId = JSON.parse(localStorage.getItem("activeUser"))["email"];

      getProductsForSpecificUser(ownerId).then(res => {
        this.stock = res;
      });

      getSpecificUsersTransactions(ownerId).then(res => {
        this.myHistoryData = res;
      });
    },
    methods: {
      changeViewItem(item) {
        this.chosenData = item;
      }
    }
  };
</script>

<style scoped>
  .managepage {
    display: flex;
    flex-direction: column;
  }

  .card {
    width: 100%;
    padding: 1em;
    border-radius: 0;
  }

  .mini-card {
    width: 100%;
    height: 88vh;
    padding: 1em;
  }
</style>
