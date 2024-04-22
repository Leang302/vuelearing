<script setup>
import { ref } from "vue";

let counter = ref(0)
const increment = ()=>counter.value++;
const decrement = ()=>counter.value--;
defineExpose({counter,increment,decrement})
</script>
<template>
<h1>{{ counter }}</h1>
<button @click="increment">+</button>
<button @click="decrement">-</button>
</template>