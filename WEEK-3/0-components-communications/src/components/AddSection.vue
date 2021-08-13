<template>
    <!-- 
        Provide inject kullandığımız için gerek kalmadı
        <button @click="$emit('new-item', new Date().getTime())">TIKLA</button>
    -->
    <button @click="newItem(new Date().getTime())">TIKLA</button>
</template>
<script>
export default {
    inject : ["newItem"],
}
</script>