<script setup>
import SlotComponentVue from "./components/SlotComponent.vue"; 
import FallbackContent from "./components/FallbackContent.vue";
import NamedSlot from "./components/NamedSlot.vue";
import DefaultSlot from "./components/DefaultSlot.vue";
</script>

<template>
<!-- we need to open and close the component in order to use slot -->
<SlotComponentVue>
  <h1>Hello World</h1>
</SlotComponentVue>
<FallbackContent>
  <h2>Hello from App</h2>
</FallbackContent>
<NamedSlot>
  <!-- slot 1 -->
  <template v-slot:one>
    <h1>This content will go to slot 1</h1>
  </template>
  <!-- slot 2 -->
  <template v-slot:two>
<h1>This is slot two</h1>
  </template>
</NamedSlot>
<DefaultSlot>
  <template #default>
    <h1>This is some random default text</h1>
  </template>
</DefaultSlot>
</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
