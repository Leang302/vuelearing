<script setup>
import { defineAsyncComponent, ref } from 'vue'
// import RenderFriends from './RenderFriends.vue'


//we use this so that the component will only get rendered when it's needed to which will improve our website performance
const RenderFriends = defineAsyncComponent(()=>import('./RenderFriends.vue'))
let showFriend = ref(false)
const toggleFriend = ()=>(showFriend.value=!showFriend.value)
</script>
<template>
<div>
    <RenderFriends v-if="showFriend"/>
    <button @click="toggleFriend">Toggle friend list</button>
</div>
</template>