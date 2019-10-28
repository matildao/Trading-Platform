<template>
  <div>
    <v-container class="dashboardpage">
      <v-row no-gutters>
        <v-card-title id="dashboard-title" class="black--text">Dashboard</v-card-title>
        <v-card class="mx-auto card monitor">
          <v-row>
            <v-col cols="12" sm="10" md="7" xs="12" lg="12">
              <SellingCard
                v-if="productData"
                :stock="productData"
                :changeViewItem="changeViewItem"
              />
            </v-col>
            <v-col cols="12" sm="10" md="4" xs="12" lg="12" class="available">
              <AvailableCard :chosenData="chosenData" />
            </v-col>
            <v-col cols="12" sm="10" md="11" xs="12" lg="12">
              <div class="d-flex flex-row">
                <v-card-title id="transactions" class="black--text">Transactions</v-card-title>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      size="20"
                      class="mt-2 black--text"
                      v-on="on"
                    >help_outline</v-icon>
                  </template>
                  <span>Transaction history shows the last 5 transactions made</span>
                </v-tooltip>
              </div>

              <TransactionHistoryCard :history="historyData" />
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import SellingCard from "../components/dashboard/SellingCard";
  import AvailableCard from "../components/dashboard/AvailableCard";
  import TransactionHistoryCard from "../components/TransactionHistoryCard";
  import { getAllProducts } from "../actions/product";
  import { getAllTransactions } from "../actions/history";

  export default {
    components: {
      SellingCard,
      AvailableCard,
      TransactionHistoryCard
    },
    data() {
      return {
        chosenData: "",
        productData: [],
        historyData: []
      };
    },
    beforeMount() {
      getAllProducts().then(res => {
        this.productData = res;
      });

      getAllTransactions().then(res => {
        this.historyData = res;
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
    background-color: rgb(124, 99, 172);
  }

  .card {
    width: 100%;
    margin-bottom: 1em;
  }
</style>
