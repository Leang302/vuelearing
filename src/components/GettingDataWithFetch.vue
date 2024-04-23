<script setup>
import { ref } from "vue";

const data = ref(null)
const fetchData=()=>{
fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    if(!res.ok){
        throw new Error(`HTTP Error! Status:${res.status}`)
    }
    //parse json res
    return res.json()
}).then((resData)=>{
    data.value = resData
}).catch((error)=>{
    console.log(`Error fetching data:${error}`)
})
}
</script>
<template>
<h1>

</h1>
<button @click="fetchData">Get Data</button>
<div>
    <h1>Data from API</h1>
    <p>{{ 
    data }}</p>
</div>
</template>