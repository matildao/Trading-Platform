<template>
  <v-card color="white darken-3" class="selling-card">
    <v-divider></v-divider>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left sort-button" @click="sortAscDesc('title')">
              Item
              <v-icon size="12" class="open-icon">{{sorted.title.icon}}</v-icon>
            </th>
            <th class="text-left sort-button" @click="sortAscDesc('amount')">
              Stock
              <v-icon size="12" class="open-icon">{{sorted.amount.icon}}</v-icon>
            </th>
            <th class="text-left">Price</th>
            <th class="text-left">Open</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in stock"
            :key="item.title"
            @click="test(item.title)"
            class="table-row"
          >
            <td>
              <img :src="getImage(item.imgurl)" class="table-image" />
            </td>
            <td>{{ item.title }}</td>
            <td>
              <div class="money">{{ item.amount }}</div>
            </td>
            <td>
              <div class="money">${{ item.price }}</div>
            </td>
            <td>
              <v-icon
                :color="getOpenClass(item.open)"
                size="12"
                class="open-icon"
              >fiber_manual_recorder</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default {
    props: ["changeViewItem"],
    data: () => {
      return {
        sorted: {
          title: { sort: false, icon: "arrow_upward" },
          amount: { sort: false, icon: "arrow_upward" }
        },
        stock: [
          {
            owner: "email@gmail.com",
            title: "Pikachu",
            imgurl: "poketrade_purple.png",
            amount: 7,
            price: 100,
            open: true
          },
          {
            owner: "email2@gmail.com",
            title: "Bulbasaur",
            imgurl: "poketrade_purple.png",
            amount: 10,
            price: 100,
            open: false
          },
          {
            owner: "email2@gmail.com",
            title: "Raichu",
            imgurl: "poketrade_purple.png",
            amount: 11,
            price: 50,
            open: true
          }
        ]
      };
    },
    methods: {
      test(item) {
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
        if (this.sorted[key].sort) {
          this.stock = this.stock.sort(this.dynamicSort(key, -1));
          this.sorted[key].sort = false;
          this.sorted[key].icon = "arrow_upwards";
        } else {
          this.stock = this.stock.sort(this.dynamicSort(key, 1));
          this.sorted[key].sort = true;
          this.sorted[key].icon = "arrow_downward";
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
    transition: 0.5s;
  }

  .table-image {
    width: 20px;
  }

  .sort-button {
    cursor: pointer;
  }

  .money {
    background-color: rgb(212, 212, 212);
    border-radius: 4px;
    text-align: center;
  }
</style>
