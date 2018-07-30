<template>
    <div>
        <h2>I am a counterr!</h2>
        <p>You have clicked the button, this many timess: <b>{{ count }}</b> times.</p>

        <v-btn color="primary" @click.native="increment">+</v-btn>
        <v-btn v-if="count >= 42" color="secondary" @click.native="count += 10"> FASTER!</v-btn>
        <v-btn v-if="count >= 256" color="error" @click.native="count += 100"> FASTER!</v-btn>


    </div>
</template>

<script>
    import Vue from "vue";


    export default Vue.component("my-component", {
        name: "my-component",
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
              // do something
                this.count++;
            }
        }
    });
</script>


<style lang="scss" scoped>
div {
    margin-top: 60px;
}

b {
    font-size: 22px;
}
</style>
