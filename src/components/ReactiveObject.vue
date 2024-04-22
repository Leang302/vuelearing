<script setup>
import { reactive, watch } from "vue";
watch(()=>state.username,(newValue,oldValue)=>{
    console.log(newValue)
    console.log(oldValue)
  
})
const state = reactive({
    username:"leang"
})
</script>
<template>
    <h1>{{state.username}}</h1>
    <button @click="state.username = 'John'">Change Name</button>
</template>