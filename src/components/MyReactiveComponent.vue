<script setup>
import { reactive } from "vue";

let inititalState = reactive({
    val:{
        count:0
    },
    user:[
        'Leang','John'
    ]
})
const changeUser = ()=>{
    inititalState.user[0] = "Michael";
    inititalState.user[1] = 'Jennie';
}
const addUser = ()=>{
    inititalState.user.push('Drake')
}
</script>
<template>
    <!-- <h1>Count {{inititalState.count}}</h1>
    <button @click="inititalState.count++">+</button> -->
    <h1>Current Count: {{inititalState.val.count}}</h1>
    <h2>Users: {{inititalState.user}}</h2>
    <button @click="inititalState.val.count++">+</button>
        <button @click="changeUser">Change User</button>
        <button @click="addUser">Add more user</button>
</template>