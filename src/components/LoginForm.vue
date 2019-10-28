<template>
  <v-row align="center">
    <v-form class="w-100" ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field
        id="email"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        id="password"
        v-model="password"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        @click:append="show1 = !show1"
      />
      <v-btn
        :disabled="!valid"
        color="indigo lighter-2"
        class="mr-4 w-100 login-button"
        @click="validate"
      >Login</v-btn>
      <p class="register">
        Not a member yet? Register
        <a href="/register">here</a>
      </p>
    </v-form>
    <v-snackbar v-model="snackbar" class="snackbar" color="red">
      Wrong email or password!
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-row>
</template>

<script>
  import { login } from "../actions/authenticate";

  export default {
    name: "LoginForm",
    data: () => ({
      valid: true,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      lazy: false,
      show1: false,
      snackbar: false
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          let dataToSend = {
            email: this.email,
            password: this.password
          };

          login(dataToSend).then(res => {
            if (res.valid === false) {
              this.snackbar = true;
            } else {
              localStorage.setItem("token", res["x-access-token"]);
              localStorage.setItem(
                "activeUser",
                JSON.stringify({
                  firstName: res.user.firstName,
                  lastName: res.user.lastName,
                  email: res.user.email,
                  birthday: res.user.birthday,
                  balance: res.user.balance,
                  url: res.user.picture
                })
              );
              this.$router.push("/dashboard");
              window.location.reload();
            }
          });
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

  .register {
    margin-top: 1em;
  }
</style>