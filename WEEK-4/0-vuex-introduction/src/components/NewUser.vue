<template>
    <button @click="updateName">New Item Add</button>
</template>
<script>
export default {
    methods : {
        updateName(){
        this.$store.state.itemList.push({ id : new Date().getTime(), title : "Sehpa", type : "mobilya" }); //burada push ettikten sonra react olduğu için list olucaktır
        this.$store.state.fullName = new Date().getTime();
        } 
    }    
}

</script>