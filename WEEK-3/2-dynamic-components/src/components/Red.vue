<template>
    <h3 class="bg-red"> {{ redProps }}</h3>
</template>
<script>
export default {
    props: ["redProps"],
    mounted(){
        console.log("Red mounted");
    }
};
</script>