<template>
  <div class="container">
    <div class="header">
        <slot name="title" />
    </div>
    <div class="content">
        <slot name="title-content" />
    </div>
    <slot/> <!-- default için tanımladık -->
    <div class="footer">
      <button>Kapat</button>
      <button>Kaydet</button>
    </div>
  </div>
</template>