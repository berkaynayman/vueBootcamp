<template>
  <button @click="activeComponent = 'Red'">Red</button>
  <button @click="activeComponent = 'Green'">Green</button>
  <button @click="activeComponent = 'Blue'">Blue</button>
  <!--
  <Red v-if="activeComponent == 'Red'" />
  <Green v-if="activeComponent == 'Green'" />
  <Blue v-if="activeComponent == 'Blue'"/>
  -->
  <!-- 
        :is içerisinde hangi componentin adı yazar ise o burada olsun anlamı gelir
        activeComponent değişkeni red,green,blue değerleri alır bu değerlerde de component özelliği
        olduğu için componenti atar
  -->
  <!--
    componentler ile
    props da kullanabiliriz
    slot da kullanabiliriz
    event, emit, inject yani herşeyi kullanabiliriz
  -->
  <!--
    componenti keep-alive taglerinin arasına alırisek 
    component bilgilerini tutarız ama her component birkez
    mounted edilir. butonlara tıklanınca tekrar tekrar mounted edilmez.
    bunun kötü yanı life sycel hook un kaybedilmesi bundan dolayı vue.js
    bize keepalive kullandığımız için 2 ayrı life sycel hooks veriyor
    bunlar activated() ve deactivated()
    activated() -> butona tıklanınca tetiklenir
    deactivated() -> diğer butonlara tıklanınca tetiklenir
  -->
  <keep-alive>
    <component :is="activeComponent" redProps="Red Component" >
        <h3 class="bg-green text-white"> GREEN COMPONENT</h3>
    </component>
  </keep-alive>
</template>

<script>
import Blue from "@/components/Blue"
import Green from "@/components/Green"
import Red from "@/components/Red"

export default {
  components :{
    Blue,
    Green,
    Red,
  },
  data() {
    return {
      activeComponent : "Red"
    };
  }
}
</script>