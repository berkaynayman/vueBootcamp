<template>
  <div>
    <p>
      {{ $store.state.person }}
      {{ $store.state.permissions }}

    </p>
    <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">{{ permission }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">{{ user }}</li>
    </ul>
    <hr>
    <p> {{ $store.state.fullName }} </p>
    <button @click="updateName">fullName i güncelle</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    // created() is life cycle
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
    /* diyelimki projemizde farklı yerlerde mobilyayı filtereleyip ekrana çekiyoruz
       mabilya diye yazım hatası yapabiliriz. doğal olarak 1 standart elde etmek için
       2- belirli kullanıcı tarafına, yazılımcıların kullanabileceği belirli başlı
       bilgileri filtreleyebilmek için state leri direk kullanıma açmak yerine getter ile
       açıyoruz. store.js içine getters{} oluşturduk. */
    //console.log(this.$store.state.itemList.filter(i => i.type === "mobilya"));
    
    // getters içerisindeki function çağırdık
    console.log(this.$store.getters.woodItems);
  },
  methods : {
    updateName(){
      this.$store.state.fullName = new Date().getTime();
    }
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
