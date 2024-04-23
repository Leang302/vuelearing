<script setup>
import { ref } from 'vue';

const friends = ref(['Jack','Oggy','Leang'])
</script>
<template>
<h3 v-for="(friend,i) in friends" :key="i">
    {{ friend }}
</h3>
</template>