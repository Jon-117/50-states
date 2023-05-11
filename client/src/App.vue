<template>
    <PageHeader></PageHeader>

    <p> Add content here </p>

    <router-view></router-view>

    <PageFooter></PageFooter>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import StateList from "@/components/StateList.vue";
export default {
    name: 'App',
    components: {
        StateList,
        PageFooter,
        PageHeader,

        },
    mounted() {
        this.$stateService.getAllStates().then( states => console.log(states))
    }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
