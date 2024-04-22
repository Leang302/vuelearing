<script setup>
import { inject } from "vue";

const friends = inject('friends')
const games =  inject('game')
const listOfGames =  inject('listOfGames')
</script>
<template>
    <h1>Friends</h1>a
    <ul >
        <li v-for="(friend, index) in friends" :key="index">{{friend}}</li>
    </ul>
    <br>
    <h1>Game</h1>

    <ul v-for="({id,title,genre,developer},index) in listOfGames" :key="index">
        <li>ID: {{id}}</li>
        <li>Title: {{title}}</li>
        <li>Genre: {{genre.join(',')}}</li>
        <li>Developer Name: {{developer.name}}</li>
        <li>Developer location: {{developer.location.join(', ')}}</li>
        <br>
    </ul>
    
    
</template>