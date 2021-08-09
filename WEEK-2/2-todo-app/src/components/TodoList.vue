<template>
    <ul>
        <!--
      <li 
      v-for="todoItem in todoList"
      :key="todoItem.id"
      class="d-flex justify-content-between align-items-center">
      <span>{{ todoItem.text }}</span>
      <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li>
        -->
      <ListItem @delete-todo-item="$emit('delete-todo-item', $event)" v-for="todoItem in myData" :key="todoItem" :item="todoItem" />
    </ul>
</template> 
<script>
import ListItem from "@/components/ListItem.vue";
export default {
    props : ["myData"],
    /*data() {
        return {
            myData : ""
        }
    },
    props : {
        myData : {
            type : String,
            required : false,
            default  : ""
        }
    },*/
    components:{
        ListItem,
    }
}
</script>