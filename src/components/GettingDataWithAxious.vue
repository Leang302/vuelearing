<script setup>
import { ref } from "vue";
import axios from 'axios';


let data = ref(null)
const fetchData = async()=>{
    try{
const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
data.value=response
    }catch(error){
        console.log(`Error fetching data: ${error}`)
    }
}
</script>
<template>
<button @click="fetchData">Get Data</button>
<div>
    <h1>Data from API</h1>
    <p>{{ 
    data }}</p>
</div>
</template>