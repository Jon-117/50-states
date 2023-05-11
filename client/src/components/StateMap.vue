<template>

<div class="state-map">

<h2>{{state.name}} State</h2>

    <p v-if="state.visited">You've visited this state!</p>
    <p v-else>You've not yet visited this state!</p>

    <!-- insert map here -->

</div>

</template>


<script>



export default {
    name: 'StateMap',
    data(){
        return{
            state: {} // works with mounted this.state.name to grab the state from the route parameter defined in @/router/index.js's routes
    }},
    mounted() {
        this.state.name = this.$route.params.state
    }
}

</script>


<style scoped>



</style>
