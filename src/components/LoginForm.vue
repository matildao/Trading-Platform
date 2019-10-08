<template>
  <v-row align="center">
    <v-form class="w-100" ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        @click:append="show1 = !show1"
      ></v-text-field>
      <!-- 
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>-->

      <v-btn
        :disabled="!valid"
        color="indigo lighter-2"
        class="mr-4 w-100 login-button"
        @click="validate"
      >Login</v-btn>
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