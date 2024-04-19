<script setup>
//normal props without specifying datatype
const props = defineProps(['name'])
</script>
<template>
    <h1>Welcome {{props.name}}</h1>
</template>