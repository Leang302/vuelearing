<script setup>
import { ref } from "vue";
import ComponentEventVue from "./components/ComponentEvent.vue";
let count = ref(0)
const formHandler=(username,email,password)=>{
console.log(username)
console.log(email)
console.log(password)
}
</script>

<template>
  <h1>Count: {{count}}</h1>
<ComponentEventVue @incrementCounter="count++" @userInfo="formHandler"/>
</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
