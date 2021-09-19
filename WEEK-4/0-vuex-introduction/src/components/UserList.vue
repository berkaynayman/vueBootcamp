<template>
    <ul>
      <li v-for="item in woodItems" :key="item.title">{{ item.title }}</li>
    </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            woodItems: "woodItems",
            activeUser: "activeUser"
        })
    }
};
</script>