<script setup>
import { ref } from "vue";

let isTrue = false;
let isFalse = true;
let isVisible = ref(true)
let username = "leang";
let isUserLoggedIn = true;
let showDetails = ref(isUserLoggedIn)
const isActive =ref(true)
</script>

<template>
    <h1 v-if="isTrue">Hello</h1>
    <h1 v-else-if="isFalse">Hello 2</h1>
    <h1 v-else>Hello 3</h1>
    
    <p v-show="isVisible">This will show based on visibility ref</p>
    <button @click="isVisible=!isVisible">Toggle Visible</button>
    <hr>
    <br>
    <h1 v-if="isUserLoggedIn">Welcome {{username}}</h1>
    <h2 v-else>Please log in to access this content</h2>
    <h1 v-show="showDetails">You are now able to modified your dashboard</h1>
    <div v-if="isActive">
        <h1>Hello dog</h1>
    </div>
    <button></button>
</template>