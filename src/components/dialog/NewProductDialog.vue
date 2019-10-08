<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <NewProductForm />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="closeDialog()">Close</v-btn>
          <v-btn color="blue darken-1" text @click="closeDialog()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import NewProductForm from "../NewProductForm";

  export default {
    props: ["open", "closeDialog"],
    components: {
      NewProductForm
    },
    data: () => ({})
  };
</script>