<template>
    <button @click="updateName">New Item Add</button>
</template>
<script>
export default {
    methods : {
        updateName(){
        const itemData = { id : new Date().getTime(), title : "Sehpa" + new Date().getTime(), type : "mobilya" };
        /*mutations çağırıyoruz, tetikliyoruz*/
        //this.$store.commit( "newItem", itemData);
        /*context çağırıyoruz yani dispatch ediyoruz*/
        this.$store.dispatch("newItem", itemData);

        //this.$store.state.itemList.push({ id : new Date().getTime(), title : "Sehpa", type : "mobilya" }); burada push ettikten sonra react olduğu için list olucaktır
        this.$store.state.fullName = new Date().getTime();
        } 
    }    
}

</script>