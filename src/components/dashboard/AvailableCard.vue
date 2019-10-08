<template>
  <v-card color="white darken-3" class="selling-card">
    <v-card-title>{{chosenData}}</v-card-title>
    <v-divider />
    <!-- <img class="graph" src="../../assets/graph.jpg" alt /> -->
  </v-card>
</template>

<script>
  export default {
    props: ["chosenData"],
    data: () => {
      return {
        itemIcon: "arrow_downward",
        sorted: {
          title: false
        },
        stock: [
          {
            owner: "email@gmail.com",
            title: "Pikachu",
            imgurl: "poketrade_purple.png",
            amount: 10,
            price: 100,
            open: true
          },
          {
            owner: "email2@gmail.com",
            title: "Bulbasaur",
            imgurl: "poketrade_purple.png",
            amount: 7,
            price: 100,
            open: false
          }
        ]
      };
    },
    methods: {
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
      dynamicSort(property, sortOrder) {
        if (property[0] === "-") {
          property = property.substr(1);
        }
        return function(a, b) {
          var result =
            a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
          return result * sortOrder;
        };
      },
      sortAscDesc(key) {
        if (this.sorted[key]) {
          this.stock = this.stock.sort(this.dynamicSort("title", -1));
          this.sorted[key] = false;
          this.itemIcon = "arrow_downward";
        } else {
          this.stock = this.stock.sort(this.dynamicSort("title", 1));
          this.sorted[key] = true;
          this.itemIcon = "arrow_upwards";
        }
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
    margin-left: 0.5em;
  }

  .title-content {
    display: flex;
    flex-direction: row;
  }

  .table-row:hover {
    cursor: pointer;
  }

  .table-image {
    width: 20px;
  }

  .sort-button {
    cursor: pointer;
  }

  .graph {
    width: 30%;
    margin: 2em;
  }
</style>
