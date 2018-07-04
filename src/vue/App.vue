<template>
    <div>
        <h1>Hello app</h1>

        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "stuff"
            }
        }
    }
</script>