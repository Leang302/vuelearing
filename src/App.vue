<script setup>

import { provide } from 'vue';
import SchoolComponent from './components/SchoolComponent.vue';
import PracticeComponent from './components/PracticeComponent.vue';
provide('studentName','Leang')
provide('studentAge',20)
provide('studentLocations', ['PP',"KD"])

//provide Array
provide('friends',['jack','Oggy','Leang'])
//provide objects 
provide('game',{
  id:1,
  title:'Fortnite',
  genre:['Action','FPS'],
  developer:{
    name:'leang',
    location:['PP','KPS']
  }
})
//provide array of object 
provide('listOfGames',[
  {
    id:1,
  title:'Fortnite',
  genre:['Action','FPS'],
  developer:{
    name:'leang',
    location:['PP','KPS']
  }
  },
  {
    id:2,
  title:'Pubg',
  genre:['Action','FPS'],
  developer:{
    name:'leang',
    location:['PP','KPS']
  }
  },
  {
    id:3,
  title:'valorant',
  genre:['Action','FPS'],
  developer:{
    name:'leang',
    location:['PP','KPS']
  }
  },
 
])
</script>

<template>
  <SchoolComponent/>
  <PracticeComponent/>
</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
