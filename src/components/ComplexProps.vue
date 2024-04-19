<script setup>
defineProps({
    friends:Array,
    userInfo:Object
})
</script>
<template>
  <h1>{{friends}}</h1>
  <h1>{{userInfo}}</h1>
  <br>
  <ul>
    <li v-for="(friend,index) in friends" :key="index">
        {{ friend }}
    </li>
  </ul>
  <br>
  <ul>
    <li>{{userInfo.name}}</li>
    <li>{{userInfo.age}}</li>
    <li>{{userInfo.location.join(', ')}}</li>
  </ul>
</template>