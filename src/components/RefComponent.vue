<script setup>
import { onMounted, ref } from 'vue'
import SharedComponent from './SharedComponent.vue'
const myRef = ref(null)
onMounted(()=>{
    console.log(myRef.value)
})
</script>
<template>
<SharedComponent ref="myRef"/>
</template>