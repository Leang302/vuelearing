<script setup>
import { inject } from 'vue';

const studentName = inject('studentName')
const studentAge = inject('studentAge')
const studentLocations = inject('studentLocations')
</script>
<template>
<h1>{{studentName}}</h1>
<h1>{{studentAge}}</h1>
<h1>{{studentLocations}}</h1>
</template>