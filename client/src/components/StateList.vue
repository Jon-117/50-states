<template>

<div class="state-list-container">
    <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail v-bind:state="state" v-on:update-visited="updateVisited"></state-detail>
    </div>
</div>

</template>


<script>
import StateDetail from "@/components/StateDetail.vue";

export default {
    name: 'StateList',
    components: {StateDetail},
    data(){
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then( states => {
                this.states = states
            })
        },


        updateVisited(stateName, visited){
            this.$stateService.setVisited(stateName,visited).then( () =>{
                this.fetchAllStates()
            })
        }
    }

}


</script>


<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    color: white;
    margin: 1rem;
}

</style>