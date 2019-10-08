<template>
  <div>
    <v-toolbar>
      <v-checkbox class="checkbox" />
      <v-toolbar-title>Manage Assets</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon @click="open=true">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(item,i) in stock" :key="i">
        <v-expansion-panel-header class="expansion-header">
          <v-checkbox class="checkbox" />
          {{ item.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-col cols="5">
              <div class="item-information">
                <div class="flex-grow-1">
                  <b>Title:</b>
                  {{item.title}}
                </div>
                <div class="flex-grow-1">
                  <b>Price:</b>
                  ${{item.price}}
                </div>
                <div class="flex-grow-1">
                  <b>Stock:</b>
                  {{item.amount}}
                </div>
              </div>
            </v-col>
            <div class="flex-grow-1"></div>

            <v-divider vertical class="mx-4"></v-divider>

            <v-col cols="3">
              <div class="actions">
                <v-btn class="flex-grow-1" text icon color="indigo lighten-1">
                  <v-icon>create</v-icon>
                </v-btn>
                <v-btn class="flex-grow-1" text icon color="indigo lighten-1">
                  <v-icon>delete</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <NewProductDialog :open="open" :closeDialog="onDialogClose" />
  </div>
</template>

<script>
  import NewProductDialog from "../dialog/NewProductDialog";

  export default {
    props: ["changeViewItem"],
    components: {
      NewProductDialog
    },
    data: () => {
      return {
        sorted: {
          title: { sort: false, icon: "arrow_upward" },
          amount: { sort: false, icon: "arrow_upward" }
        },
        open: false,
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
      onDialogClose() {
        this.open = false;
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

  .checkbox {
    padding-top: 0;
  }
</style>
