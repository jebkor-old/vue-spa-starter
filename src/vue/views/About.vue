<template>
  <v-layout row wrap>
    <v-flex xs12>

      <h1 class="display-3">About page</h1>

      <v-layout row wrap>
        <v-flex xs12 lg4>
          <v-form>
            <v-text-field v-model="email" v-validate="'email|required'" :error-messages="errors.collect('email')" type="email" name="email" label="E-mail" outline clearable append-icon="person" required></v-text-field>

            <v-text-field v-if="enableVisibilityIcon == false" v-model="password" v-validate="{required: true}" :error-messages="errors.collect('password')" :type="showPassword ? 'text' : 'password'" label="Password" name="password" outline clearable append-icon="lock" required></v-text-field>

            <v-text-field v-else v-model="password" v-validate="{required: true}" :error-messages="errors.collect('password')" :type="showPassword ? 'text' : 'password'" label="Password" name="password" outline clearable :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword" required></v-text-field>

            <v-checkbox v-model="rememberMe" label="Remember me?"></v-checkbox>

            <v-btn type="submit" class="primary">Log ind</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

</template>

<script>
  import { Validator } from "vee-validate";

  const dict = {
    custom: {
      email: {
        required: () => "Feltet skal udfyldes",
        email: () => "Mailen er ikke en gyldig mail"
      },
      password: {
        required: () => "Feltet skal udfyldes"
      }
    }
  };

  Validator.localize("en", dict);

  export default {
    data() {
      return {
        email: "",
        password: "",
        showPassword: false,
        enableVisibilityIcon: false,
        rememberMe: false
      }
    },
    watch: {
      password(input) {
        console.log(input);
        if (input != null && input.length >= 1) {
          this.enableVisibilityIcon = true;
        } else {
          this.enableVisibilityIcon = false;
        }
      }
    }
  }
</script>


<style lang="scss">
</style>