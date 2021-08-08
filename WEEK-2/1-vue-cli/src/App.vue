<template>
  <app-header />
  <div class="container">
   <h3> Bu benim ilk Vue CLI uygulamam</h3>
   <p>bugün component ve VUE CLI konularını görücez</p>
  </div>
  <CounterItem />
  
</template>

<script>
// bir component içerinde import edince local registiirng
import CounterItem from "@/components/CounterItem.vue";
export default {
  components : {
    CounterItem,
  },
};
</script>