<script setup>
import BasicComponentWatcherVue from "./components/BasicComponentWatcher.vue";
import ReactiveObject from "./components/ReactiveObject.vue";
import MultipleSources from "./components/MultipleSources.vue";
</script>

<template>
 <BasicComponentWatcherVue/>
 <ReactiveObject/>
 <MultipleSources/>

</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
