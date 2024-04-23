<script setup>
import Component1 from './Component1.vue'
import Component2 from "./Component2.vue"
import Component3 from "./Component3.vue"
import { ref } from "vue"

const currentTab = ref('Component1')
const tabs = {
    Component1,Component2,Component3
}
</script>
<template>
<button @click="currentTab='Component1'">What is component 1?</button>
<button @click="currentTab='Component2'">What is component 2?</button>
<button @click="currentTab='Component3'">What is component 3?</button>

<!-- Dynamic Component -->
<component :is="tabs[currentTab]"></component>
</template>