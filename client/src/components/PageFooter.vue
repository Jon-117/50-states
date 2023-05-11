<template>
  <div id="footer">

      <div id="navigation-links">
          <span class="nav-link">
              <router-link to="/">Home</router-link>
          </span>
          <span class="nav-link">
              <router-link to="about">About</router-link>
          </span>
      </div>
      <div>
          <p>Header image by <a href="https://unsplash.com/photos/_CL-l9Q9oYM">David Martin</a></p>
      </div>
  </div>

</template>

<script>
export default {
    name: 'PageFooter',
}
</script>

<style scoped>

#footer {
    color: grey;
}

.nav-link {
    margin: 1rem;
}
</style>