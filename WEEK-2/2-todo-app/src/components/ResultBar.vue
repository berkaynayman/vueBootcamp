<template>
    <small class="mt-2 d-flex justify-content-end green">
      {{ itemCount }} adet öge var
    </small>
</template>

<script>
export default {
  props : ["itemCount"],
}
</script>