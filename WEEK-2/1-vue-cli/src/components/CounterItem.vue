<template>
    <div class="container-sm">
        <h3> {{ counter }}</h3>
        <button @click="counter++">++</button>
        <button @click="counter--">--</button>
    </div>
</template>
<script>
// bu js instancenı dış dünyaya açmam gerekiyor
export default {
    data(){
        return{
            counter :0,
        };
    }
}
</script>