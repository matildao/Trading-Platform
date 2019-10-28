<template>
  <v-card color="white darken-3" class="selling-card">
    <v-divider />
    <v-simple-table class="sell-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left sort-button" @click="sortAscDesc('title')">
              Item
              <v-icon size="12" class="open-icon">{{sorted.title.icon}}</v-icon>
            </th>
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
            <td>
              <img src="../../assets/poketrade_purple.png" class="table-image" />
            </td>
            <td>{{ item.title }}</td>
            <td>
              <div class="money">${{ item.startingPrice }}</div>
            </td>
            <td>{{ item.rate }}</td>
            <td>{{ item.variance }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default {
    props: ["changeViewItem", "stock"],
    data: () => {
      return {
        sorted: {
          title: { sort: false, icon: "arrow_upward" },
          amount: { sort: false, icon: "arrow_upward" }
        }
      };
    },
    methods: {
      changeItem(item) {
        this.changeViewItem(item);
      },
      getOwner(item) {
        return item.ownerId ===
          JSON.parse(localStorage.getItem("activeUser"))["email"]
          ? "You"
          : item.ownerId;
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
    border-radius: 0;
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
    text-align: center;
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

  tr:nth-child(even) {
    background-color: #eddff1;
  }
</style>
