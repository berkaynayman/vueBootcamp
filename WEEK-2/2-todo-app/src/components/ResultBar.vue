<template>
    <small class="mt-2 d-flex justify-content-end green">
      {{ provideData.todoList.length }} adet öge var
    </small>
</template>

<script>
export default {
  inject : ["provideData"],
}
</script>