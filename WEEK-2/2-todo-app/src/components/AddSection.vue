<template>
    <input v-model="todoText" @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız ..." />
</template>

<script>
export default {
    data(){
        return {
            todoText: null
        };
    },
    methods: {
        addNewTodo() {
            this.$emit("add-todo", this.todoText);
            this.todoText = null;
        }
    }
};
</script>