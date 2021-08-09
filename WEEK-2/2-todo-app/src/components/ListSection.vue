<template>
    <div>
        <TodoList />
        <ResultBar/>
    </div>
</template>
<script>
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";
export default {
    inject : ["provideData"],
    components:{
        TodoList,
        ResultBar
    }
}
</script>