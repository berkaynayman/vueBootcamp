<template>
  <div>
    <p>
      {{ $store.state.person }}
      {{ $store.state.permissions }}

    </p>
    <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">{{ permission }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    // life cycle
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
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
  margin-top: 60px;
}
</style>
