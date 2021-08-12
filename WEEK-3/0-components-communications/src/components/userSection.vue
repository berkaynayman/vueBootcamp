<template>
    <div>
    <ul>
        <li v-for="user in ahmett" :key="user">{{ user }}</li>
    </ul>
    <!-- child' ten parent' a veri göndermek istiyorisek $emit kullanırız 
        new-item adında event gönderiyorum değeride bu new Date().getTime()) -->
    <button @click="$emit('new-item', new Date().getTime())">TIKLA</button>
    </div>
</template>
<script>
export default {
    props :["ahmett"], // parentdan gelen veriyi kullanmak için belirtmeliyiz
};
</script>