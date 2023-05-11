<template>

<div class="state-map">

<h2>{{state.name}} State</h2>

    <p v-if="state.visited">You've visited this state!</p>
    <p v-else>You've not yet visited this state!</p>

    <!-- insert map here -->
    <div id="map-container">
        <l-map v-bind:center="mapCenter" v-bind:zoom="state.zoom">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution:="http://www.openstreetmap.org/copyright">
            </l-tile-layer>
        </l-map>
    </div>

</div>

</template>


<script>

import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
    name: 'StateMap',
    components: {LMap,LTileLayer},
    data(){
        return {
            state: {} // works with mounted this.state.name to grab the state from the route parameter defined in @/router/index.js's routes
    }},
    mounted() {
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData(){
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state
            })
        }
    }
}

</script>


<style scoped>

#map-container {height: 30rem}

</style>
