<template>
  <div class="container">
    <h3 class="text-center"> ToDo App</h3>
    <hr>
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection @delete-todo-item="deleteItem" :todoList="todoList" />
  </div>
</template>  
<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";

export default {
  components :{
    AddSection,   
    ListSection
  },
  created() {
    /*
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
    */
  },
  data() {
    return {
      provideData : {
        todoList: [
          { id: 1, text: "Bootcamp #2" },
          { id: 2, text: "Bootcamp #2.1" },
          { id: 3, text: "Bootcamp #2.2" },
          { id: 4, text: "Bootcamp #2.3" },
          { id: 5, text: "Bootcamp #2.4" },
          { id: 6, text: "Bootcamp #2.5" }
        ]
      }
    };
  },
  provide(){
    return{
      provideData : this.provideData,
      deleteItem : this.deleteItem  
    }
  },
  methods : {
    deleteItem(todoItem) {
      console.log(todoItem);
      this.provideData.todoList = this.provideData.todoList.filter((t) => t !== todoItem); 
    },
    addNewTodo(event){
      console.log("event ",event);
      this.provideData.todoList.push({
        id : new Date().getTime(),
        text : event
      })
    }
  }
}
</script>  