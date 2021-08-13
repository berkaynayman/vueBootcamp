<template>
    <ul>
        <!--
        <li v-for="user in ahmett" :key="user">{{ user }}</li>
        -->
        <li v-for="user in userList" :key="user">{{ user }}</li>

    </ul>
</template>
<script>
export default {
   // props :["ahmett"],
    inject : ["userList"], // provide ettiğimiz userList i burada inject ediyoruz
}
</script>