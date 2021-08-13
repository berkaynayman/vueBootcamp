<template>
    <h3 class="bg-blue text-white"> BLUE COMPONENT</h3>
    <!-- 
        burada inputda giriş yapasak sonra 
        diğer componentleri açarsak input içindeki veri
        silinir. red btn ye basınca red i mount eder ve ekrana
        getirir. bunun sebebi dom dan kaldırılması
    -->
    <input type="text">
</template>
<script>
export default {
    mounted() {
        console.log("blue mounted");
    },
    activated() {
        console.log("BLUE Activated");
    }, 
    deactivated() {
        console.log("BLUE Deactivated");
    }
}
</script>