<template>
  <div class="container">
    <h3 class="text-center"> ToDo App</h3>
    <hr>
    <AddSection/>
    <TodoList :myData="todoList" />
    <ResultBar/>
  </div>
</template>  
<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
  components :{
    AddSection,
    TodoList,
    ResultBar
  },
  created() {
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ];
    }, 2000);
  },
  data() {
    return {
      todoList: []
    }
  },
  methods : {
    deleteItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((t) => t !== todoItem); 
    },
    addNewTodo(event){
      this.todoList.push({
        id : new Date().getTime(),
        text : event.target.value
      });
      event.target.value = "";
    }
  }
}
</script>