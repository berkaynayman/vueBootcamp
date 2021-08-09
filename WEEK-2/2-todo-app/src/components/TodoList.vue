<template>
    <ul>
      <ListItem v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem" />
    </ul>
</template> 
<script>
import ListItem from "@/components/ListItem.vue";
export default {
    inject : ["provideData"]
    //props : ["myData"],
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
    }*/,
    components:{
        ListItem,
    }
}
</script>