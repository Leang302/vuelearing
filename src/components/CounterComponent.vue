<script setup>
import {useCounter} from '../shared/useCounter'
const counter = useCounter()
</script>
<template>
<div>
    <h1>{{counter.count}}</h1>
<button @click="counter.increment">+</button>
<button @click="counter.decrement">-</button>
</div>
</template>