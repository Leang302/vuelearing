<script setup>
import { ref } from "vue";

const formData = ref({username:'',email:'',password:''})
</script>
<template>
    <form @submit.prevent>
        <input type="text" placeholder="Please enter your name" v-model="formData.username">
        <input type="email" placeholder="Please enter your Email" v-model="formData.email">
        <input type="password" placeholder="Please enter your Password" v-model="formData.password">
        <button type="submit">Submit</button>
    </form>
    <h1>
        {{ formData.username }}
    </h1>
</template>