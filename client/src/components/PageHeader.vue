<template>
  <div id="block-header">
      <h1 id="title">Which of our united states have you visited?</h1>
  </div>
</template>

<script>
export default{
    name: 'PageHeader',
}
</script>

<style scoped>
#block-header {
    padding: 2rem 1rem;
    margin: 2rem;
    border-radius: 1rem;
    background-color: rosybrown;
    background-image: url('~@/assets/david-martin-map-photo.jpg');
    background-position: center;
    background-size: cover;
}
#title{
    font-family: "Book Antiqua", Arial,serif;
    color: snow;
}
</style>



