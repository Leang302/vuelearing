<script setup>
import { ref,onBeforeMount,onMounted, onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";
const message = ref('Hello')
const updateMesssage = ()=>{
    message.value= 'Updated Hello'
}
//life cycle hooks
onBeforeMount(()=>{
    console.log('Component is about to be mounted')
})
onMounted(()=>{
    console.log('Component has been mounted')
})
onBeforeUpdate(()=>{
    console.log('Component is about to be updated')
})
onUpdated(()=>{
    console.log('Component has been updated successfully')
})
onBeforeUnmount(()=>{
    console.log('Component is about to be unmounted')
    
})
onUnmounted(()=>{
    console.log('Component has been unmounted')
})
</script>
<template>
<p>{{ message }}</p>
<button @click="updateMesssage">Update Message</button>
</template>