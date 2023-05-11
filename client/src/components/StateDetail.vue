<template>

<div class="state-info">

    <span class="state-name">{{state.name}}</span>

    <div>
        <input class="visit-state" type="checkbox">
    </div>

</div>

</template>


<script>



export default {
    name: 'StateDetail',
    props: {
        state: Object,
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
