<template>
  <div>
    <p>
      {{ $store.state.user }}
      {{ $store.state.permissions }}

    </p>
    <!--
    <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">{{ permission }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">{{ user }}</li>
    </ul>
    -->

    <ul>
      <li v-for="item in woodItems" :key="item.title">{{ item.title }}</li>
    </ul>
    <hr>
    <p> {{ $store.state.fullName }} </p>
    <button @click="updateName">fullName i güncelle</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'App',
  created(){
    // created() is life cycle
    console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
    /* diyelimki projemizde farklı yerlerde mobilyayı filtereleyip ekrana çekiyoruz
       mabilya diye yazım hatası yapabiliriz. doğal olarak 
       1- standart elde etmek için
       2- belirli kullanıcı tarafına, yazılımcıların kullanabileceği belirli başlı
       bilgileri filtreleyebilmek için state leri direk kullanıma açmak yerine getter ile
       açıyoruz. store.js içine getters{} oluşturduk. */
    //console.log(this.$store.state.itemList.filter(i => i.type === "mobilya"));
    
    // getters içerisindeki function çağırdık
    console.log(this.$store.getters.woodItems);
    //console.log(this.$store.getters.activeUser);
    console.log('this.activeUser :>> ', this.activeUser);
  },
  methods : {
    updateName(){
      this.$store.state.itemList.push({ id : 6, title : "Sehpa", type : "mobilya" }); //burada push ettikten sonra react olduğu için list olucaktır
      this.$store.state.fullName = new Date().getTime();
    } 
  },
  computed :{
    ... mapGetters(["woodItems", "activeUser"]),
    /*farklı syntax kullanımı
    ...mapGetters({
      agacElemanlari : "woodItems", agacElemanları adinda computedım var değer woodItemsdan geliyor
      activeUser : "activeUser"
    })
    */
    /*customComputed(){
    }*/
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
