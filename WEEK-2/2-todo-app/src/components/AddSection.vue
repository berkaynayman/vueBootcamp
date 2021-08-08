<template>
    <label for="todoText"></label>
    <!--
    <input @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız ...">
    -->
    <input type="text" id="todoText" placeholder="Bir şeyler yazınız ...">
    <button class="green" @click="sendData">Gönder</button>
</template>

<script>
export default {
    methods: {
        sendData() {
            alert();
        }
    }
};
</script>