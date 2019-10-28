<template>
  <v-form class="w-100" ref="form" v-model="valid" :lazy-validation="lazy">
    <v-row>
      <v-col cols="12" md="6" xs="12">
        <v-text-field
          v-model="form.firstName"
          :rules="nameRules"
          label="Firstname"
          required
        />
      </v-col>
      <v-col cols="12" md="6" xs="12">
        <v-text-field
          v-model="form.lastName"
          :rules="nameRules"
          label="Lastname"
          required
        />
      </v-col>
      <v-col cols="12" md="6" xs="12">
        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="E-mail"
          required
        />
      </v-col>
      <v-col cols="12" md="6" xs="12">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="form.date"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.birthday"
              label="Picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="form.birthday" no-title scrollable>
            <div class="flex-grow-1"></div>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(form.birthday)"
            >OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" md="12" xs="12">
        <v-text-field
          v-model="form.password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        />
        <v-progress-linear
          v-show="form.password"
          v-if="custom"
          :value="progress"
          :color="color"
          height="7"
          class="mt-3"
        />
      </v-col>
      <v-col cols="12" md="6" xs="12">
        <TermsConditionsDialog :open="open" :closeDialog="onDialogClose" />

        <v-btn @click="open=true">Terms & Conditions</v-btn>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        />
      </v-col>
      <v-col cols="12" md="12" xs="12">
        <v-btn
          class="mr-4 register-button"
          :disabled="!valid"
          color="indigo lighter-2"
          @click="validate"
        >Register</v-btn>
      </v-col>
      <v-snackbar v-model="snackbar">
        Oops! something went wrong. Try again later.
        <v-btn color="red" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-row>
  </v-form>
</template>

<script>
  import TermsConditionsDialog from "./dialog/TermsConditionsDialog";
  import { register } from "../actions/authenticate";

  export default {
    components: {
      TermsConditionsDialog
    },
    data: () => ({
      open: false,
      valid: true,
      form: {
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        password: ""
      },
      menu: false,
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Min 8 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      nameRules: [v => !!v || "Name is required"],
      checkbox: false,
      lazy: false,
      show1: false,
      custom: true,
      snackbar: false
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          register(this.form).then(res => {
            if (res.status === 200) {
              window.location.href = "/login";
            } else {
              this.snackbar = true;
            }
          });
        }
      },
      onDialogClose() {
        this.open = false;
        this.checkbox = true;
      }
    },
    computed: {
      progress() {
        return Math.min(100, this.form.password.length * 5);
      },
      color() {
        return ["error", "warning", "success"][Math.floor(this.progress / 40)];
      }
    }
  };
</script>


<style scoped>
  .w-100 {
    margin: auto;
  }

  .register-button {
    margin-top: 1em;
    width: 100%;
    color: white;
  }

  @media only screen and (max-width: 500px) {
    .w-100 {
      width: 75%;
    }
  }
</style>