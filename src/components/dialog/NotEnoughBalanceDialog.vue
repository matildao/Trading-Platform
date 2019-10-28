<template>
  <v-row justify="center">
    <v-dialog
      class="dialog"
      v-model="open"
      persistent
      max-width="600px"
      height="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Not Enough Balance</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div>
              It looks like you don't have enouch money to buy this assset. Would you like to add funds to your account? Try our lucky wheel of fortune or add balance at your
              <a
                href="/profile"
              >profile</a>.
            </div>
            <img
              class="mt-12 center"
              src="/assets/puff.gif"
              alt="Puff"
              width="100px"
            />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ["open", "closeDialog"],
    components: {},
    data: () => ({})
  };
</script>

<style scoped>
  .dialog {
    max-width: 600px;
  }

  .center {
    display: block;
    margin: auto;
  }
</style>