<script setup>
import { computed, ref } from "vue";
//computed properties when the original value changes the computed value changes too
let number = ref(5);
let squareNumber = computed(()=>{
    return number.value*number.value
})

const firstName = ref('Keo')
const lastName = ref('KimLeang')
const fullName = computed(()=>firstName.value+' '+lastName.value)

const num = ref(2);
const squareNum = computed(()=>num.value**2)
</script>

<template>
    <h1>Number:{{number}}</h1>
    <h1>Square Number:{{squareNumber}}</h1>
    <hr>
    <h1>First Name:{{firstName}}</h1>
    <h1>Last Name:{{lastName}}</h1>
    <h1>Fullname:{{fullName}}</h1>
    <hr>
    <h1>Num:{{num}}</h1>
    <h2>Square num:{{squareNum}}</h2>
    <button @click="num++">Increment</button>
</template>