<script setup>
import { ref } from 'vue';
let count =ref(0);
const incrementCounter =()=>count.value++;
const decrementCounter = ()=>count.value--;
const submitHandler = (e)=>{
    e.preventDefault()
}
</script>
<template>
  <h1>Count: {{count}}</h1>  
  <button v-on:click="incrementCounter">Increment </button>
  <button @click="decrementCounter">Decrement </button>

  <form @submit="submitHandler">
    <input type="text" placeholder="Please Enter your name">
    <input type="email" placeholder="Please Enter your Email">
    <button type="submit">Submit</button>
  </form>
</template>