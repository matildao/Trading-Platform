<template>
  <v-card color="white darken-3" class="selling-card">
    <div v-if="chosenData">
      <v-card-title
        class="title"
      >{{ chosenData.depositId }} {{chosenData.title}}</v-card-title>
      <v-divider />
      <div class="pa-4 pb-2">{{ chosenData.price }}</div>
      <div class="pb-6">
        <img class="pokemon-img" :src="getImage(chosenData.title)" alt />
      </div>
      <v-divider />
      <v-btn
        class="sell-button"
        text
        small
        color="grey"
        @click="confirmPage()"
      >Sell Item</v-btn>
    </div>
    <EmptyState
      v-if="!chosenData"
      title="Empty"
      description="Click on an item to display"
    />
  </v-card>
</template>

<script>
  import EmptyState from "../EmptyState";

  export default {
    props: ["chosenData"],
    components: {
      EmptyState
    },
    data: () => {
      return {
        disable: false,
        open: false
      };
    },
    methods: {
      getOwner(item) {
        return item.ownerId ===
          JSON.parse(localStorage.getItem("activeUser"))["email"]
          ? false
          : true;
      },
      getImage(title) {
        return `assets/${title.toLowerCase()}.png`;
      },
      onDialogClose() {
        this.open = false;
      },
      makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      },
      confirmPage() {
        localStorage.setItem("transactionData", JSON.stringify(this.chosenData));
        this.$router.push(`/confirmation/sell:${this.makeid(40)}`);
      }
    }
  };
</script>

<style scoped>
  .selling-card {
    width: 100%;
    min-height: 40vh;
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

  .title {
    font-size: 15px !important;
  }

  .table-row:hover {
    cursor: pointer;
  }

  .table-image {
    width: 20px;
  }

  .sell-button {
    width: 100%;
  }

  .graph {
    width: 30%;
    margin: 2em;
  }

  .pokemon-img {
    width: 10em;
    margin: auto;
    display: block;
  }
</style>
