<template>
  <div class="container">
    <h3 class="text-center"> ToDo App</h3>
    <hr>
    <label for="todoText"></label>
    <input type="text" id="todoText" placeholder="Bir şeyler yazınız ...">
    <ul>
      <li 
      v-for="i in 5"
      :key="i"
      class="d-flex justify-content-between align-items-center">
      <span> Todo Item #{{i}}</span>
      <button class="sm red">Sil</button>
      </li>
    </ul>
  </div>
</template>