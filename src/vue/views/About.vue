<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>About page</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 lg4>
        <v-form>
          <v-text-field 
            v-model="email" 
            v-validate="'email|required'"
            :error-messages="errors.collect('email')"
            type="email"
            name="email"
            label="E-mail"
            outline 
            clearable 
            append-icon="person" 
            required
          ></v-text-field>

          <v-text-field 
            v-model="password"
            v-validate="{required: true}"
            :error-messages="errors.collect('password')"
            :type="showPassword ? 'text' : 'password'" 
            label="Password" 
            name="password"
            outline 
            clearable 
            append-icon="lock" 
            required
          ></v-text-field>

          <v-checkbox 
            v-model="rememberMe" 
            label="Remember me?"
          ></v-checkbox>

          <v-btn type="submit" class="primary">Login ind</v-btn>
        </v-form>
      </v-flex>
    </v-layout>

  </div>
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
        rememberMe: false
      }
    },
    watch: {
      password(input) {
        console.log("input: ", input);
        if (input.length >= 5) {
          this.showPassword = true;
        } else if (input.length <= 5){
          this.showPassword = false;
        } else {
          console.log("Something happened, the world exploded!");
        }
      }
    }
  }
</script>


<style lang="scss">

</style>