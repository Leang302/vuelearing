<script setup>
import { ref } from 'vue';
import LifeCycleComponent from './components/LifeCycleComponent.vue'
const show = ref(true)
</script>

<template>
 <LifeCycleComponent v-if="show"/>
 <button @click="show= !show">Toggle Visible</button>
</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
