<template>
  <v-card color="white darken-3" class="selling-card">
    <div v-if="chosenData">
      <v-card-title class="title">{{chosenData.title}}</v-card-title>
      <v-divider />
      <div class="card-content">
        <div class="ml-4">
          <img class="pokemon-img" :src="getImage(chosenData.title)" alt />
        </div>
        <div class="mr-12">
          <p id="data-title">
            <b>Title</b>
            {{ chosenData.title }}
          </p>
          <p>
            <b>Price</b>
            {{ chosenData.startingPrice }}
          </p>
          <p>
            <b>Variance</b>
            {{ chosenData.variance }}
          </p>
          <p>
            <b>Rate</b>
            {{ chosenData.rate }}
          </p>
        </div>
      </div>

      <v-divider />
      <v-btn
        class="buy-button"
        text
        small
        color="grey"
        @click="confirmPage()"
      >Buy Item</v-btn>
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
      confirmPage() {
        localStorage.setItem("transactionData", JSON.stringify(this.chosenData));
        this.$router.push(`/confirmation/buy:${this.makeid(40)}`);
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
    justify-content: space-between;
    padding: 0.8em;
    color: rgb(105, 105, 105);
  }

  .title-content {
    display: flex;
    flex-direction: row;
  }

  .title {
    font-size: 15px !important;
  }

  .buy-button {
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

  @media only screen and (max-width: 600px) {
    .card-content {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1200px) {
    .card-content {
      display: flex;
      flex-direction: column;
    }
  }
</style>
