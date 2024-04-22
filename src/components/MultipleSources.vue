<script setup>
import { ref, watch } from "vue";

const username = ref('leang')
const counter = ref(0)
watch([username,counter],(newValue,oldValue)=>{
    console.log(newValue)
    console.log(oldValue)
})
</script>

<template>
    <h1>{{username}}</h1>
    <h1>{{counter}}</h1>
    <button @click="username = 'KimLeang'">Change Name</button>
    <button @click="counter++ ">+</button>

</template>