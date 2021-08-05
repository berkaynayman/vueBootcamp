const app = Vue.createApp({
    /* vue3 vue içerisinde createApp kullanarak oluşturuz
        ama vue2 de framwroeku kullanrak oluştururuz
    */
    data(){
        return{
            todoText : null,
            todoList : [],
        };
    },
    methods: {
        addTodo() {
            this.todoList.push(this.todoText);
        },
    },
}).mount("#app");