<script setup>
import DynamicBinding from './components/DynamicBinding.vue';
import GlobalStlyle from './components/GlobalStlyle.vue';
import LocalStyle from './components/LocalStyle.vue';
import CombinedStyle from './components/CombinedStyle.vue';
import ModuleStyle from './components/ModuleStyle.vue';
</script>

<template>
 <!-- <GlobalStlyle/>
 <LocalStyle/> -->
 <CombinedStyle/>
 <ModuleStyle/>
</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
