<template>

<div class="state-info">

    <span class="state-name">{{state.name}}</span>

    <div>
        <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

</div>

</template>


<script>



export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object,
    },
    data() {
        return {
            visited: this.state.visited
    }},
    methods: {
        visitedChanged(){
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}

</script>


<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 8rem;
    border: 1rem;
    border-radius: .5rem;
    background-color: rosybrown;
}

</style>
