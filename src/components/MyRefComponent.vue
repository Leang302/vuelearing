<script setup>
import { ref } from "vue";

let count = ref(0)
let username = ref('')
let usersList = ref([
    'Michel','Jordan','Huxn','John'
])
let userInfo = ref({
    name:'leang',age:20,location:['PP','KPC'],isMarried:false
})
</script>

<template>
    <h2>Count: {{count}}</h2>
    <button @click="count++">+</button>
    <button @click="count--">-</button>

    <h1>Username:{{ username }}</h1> 
   <button @click="username='leang'">Add user</button> 

    <h1>User List: {{usersList}}</h1>
    <button @click="usersList.push('Leang')">Add user</button>4
    <hr>
    <h1>Name:{{userInfo.name}}</h1>
    <h1>Age:{{userInfo.age}}</h1>
    <h1>location:{{userInfo.location}}</h1>
    <h1>Is Married:{{userInfo.isMarried}}</h1>

    <button @click="userInfo.name='John'">Change Name</button>
    <button @click="userInfo.age=40">Change Age</button>
    <button @click="userInfo.location=['KPS','TK']">Change location</button>
    <button @click="userInfo.isMarried=true">Change status</button>
</template>