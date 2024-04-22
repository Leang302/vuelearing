<script setup>
import { onMounted, ref } from 'vue';

const myRef = ref('');
console.log(myRef)
onMounted(()=>{
    myRef.value.focus()
    myRef.value.val
})
</script>
<template>
        <div>
        <input type="text" placeholder="Please enter your name" ref="myRef">
    </div>
</template>