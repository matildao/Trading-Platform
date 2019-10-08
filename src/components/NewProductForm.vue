<template>
  <v-row align="center">
    <v-form class="w-100" ref="form" v-model="valid" :lazy-validation="lazy">
      <v-row>
        <v-col cols="12" md="12" xs="12">
          <v-text-field
            class="pa-2"
            v-model="email"
            :rules="emailRules"
            label="Title"
            required
          />
        </v-col>
        <v-col cols="12" md="6" xs="12">
          <v-text-field
            class="pa-2"
            v-model="email"
            hide-details
            single-line
            label="Price"
            type="number"
          />
        </v-col>
        <v-col cols="12" md="6" xs="12">
          <v-text-field
            class="pa-2"
            v-model="email"
            hide-details
            single-line
            label="Stock"
            type="number"
          />
        </v-col>
        <v-col cols="12" md="12" xs="12">
          <v-btn
            :disabled="!valid"
            color="indigo lighter-2"
            class="mr-4 w-100 login-button"
            @click="validate"
          >Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkbox: false,
      lazy: false,
      show1: false
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true;
          //login
        }
      }
    }
  };
</script>


<style scoped>
  .w-100 {
    width: 85%;
    margin: auto;
  }

  .login-button {
    margin-top: 1em;
    width: 100%;
  }
</style>