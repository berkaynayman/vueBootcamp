<template>
  <Modal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>

    <template #title-content> <!-- bu syntaxda tercih edilebilr <template #title-content> -->
      <p class="text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta laborum inventore quis
          magni quibusdam, non odio ipsa recusandae tempore?</p>
    </template>

    <template #default>
      Bu default olarak gösterileceks
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/Modal.vue"
export default {
  components :{
    Modal,
  }
}
</script>