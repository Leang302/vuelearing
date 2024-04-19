<script setup>
//normal props without specifying datatype
const props = defineProps(['firstName','lastName'])
</script>
<template>
    <h1>Welcome {{props.firstName}} {{props.lastName}}</h1>
</template>