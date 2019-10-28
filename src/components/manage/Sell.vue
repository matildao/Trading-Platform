<template>
  <div>
    <v-toolbar class="sell-toolbar">
      <v-toolbar-title class="ml-2">Manage Assets</v-toolbar-title>
      <div class="flex-grow-1" />
    </v-toolbar>
    <v-simple-table class="sell-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Deposit Id</th>
            <th class="text-left sort-button">Item</th>
            <th class="text-left">Price</th>
            <th class="text-left">rate</th>
            <th class="text-left">variance</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in stock"
            :key="i"
            @click="changeItem(item)"
            class="table-row"
          >
            <td>{{ item.depositId }}</td>
            <td>{{ item.title }}</td>
            <td>
              <div>${{ item.startingPrice }}</div>
            </td>
            <td>{{ item.rate }}</td>
            <td>{{ item.variance }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  import {
    getAllProductsForSpecificUser,
    getAllProducts
  } from "../../actions/product";

  export default {
    props: ["changeViewItem"],
    components: {},
    data: () => {
      return {
        sorted: {
          title: { sort: false, icon: "arrow_upward" },
          amount: { sort: false, icon: "arrow_upward" }
        },
        stock: [],
        all: []
      };
    },
    beforeMount() {
      let ownerId = JSON.parse(localStorage.getItem("activeUser"))["email"];

      getAllProducts().then(res => {
        this.all = res;
      });

      getAllProductsForSpecificUser(ownerId).then(res => {
        this.createListOfAssets(this.all, res);
      });
    },
    methods: {
      changeItem(item) {
        this.changeViewItem(item);
      },
      getOpenClass(order) {
        let openClass = "";

        if (order) {
          openClass = "green";
        } else {
          openClass = "red";
        }
        return openClass;
      },
      getImage(url) {
        return `/assets/${url}`;
      },
      createListOfAssets(products, userAssets) {
        userAssets.forEach(asset => {
          products.forEach(product => {
            if (product.id === asset.productId) {
              this.stock.push({ ...product, ...asset });
            }
          });
        });
      }
    }
  };
</script>

<style scoped>
  .selling-card {
    width: 100%;
    height: 50vh;
    margin-bottom: 1em;
    margin-right: 1em !important;
    color: rgb(44, 44, 44);
  }

  .card-content {
    display: flex;
    flex-direction: row;
    padding: 0.8em;
    color: rgb(105, 105, 105);
    border-bottom: 1px solid rgb(49, 49, 49);
  }

  .open-icon {
    margin-left: 2.5em;
  }

  .title-content {
    display: flex;
    flex-direction: row;
  }

  .table-row:hover {
    cursor: pointer;
    transition: 0.5s;
  }

  .table-image {
    width: 20px;
  }

  .sort-button {
    cursor: pointer;
  }

  .money {
    background-color: rgb(99, 99, 99);
    border-radius: 4px;
    text-align: center;
  }

  .item-information {
    color: rgb(139, 139, 139);
    display: flex;
    flex-direction: column;
  }

  .actions {
    display: flex;
    flex-direction: column;
  }

  .expansion-header {
    padding-top: 0;
    padding-bottom: 0;
  }
  .expansion {
    border-radius: 0;
  }

  .checkbox {
    padding-top: 0;
  }

  .sell-toolbar {
    box-shadow: none;
  }

  tr:nth-child(even) {
    background-color: #eddff1;
  }
</style>
