<script setup>


import StaticPropsComponent from "./components/StaticPropsComponent.vue";
import DynamicPropsComponent from "./components/DynamicPropsComponent.vue";
import PropsValidation from "./components/PropsValidation.vue";
import ComplexProps from "./components/ComplexProps.vue";
import CustomValidator from "./components/CustomValidator.vue";
import { ref } from "vue";
const firstName =ref( 'leang')
const lastName = ref('Kim')
const myFavNum = ref(2)
</script>

<template>

 <StaticPropsComponent name="Jordan"/>
 <DynamicPropsComponent :firstName="firstName" :lastName="lastName"/>

 <PropsValidation fullName="Keo KimLeang" :age="20"/>
 <ComplexProps :friends="['Jack','Oggy','Leang']" :userInfo="{name:'Jack',age:20,location:['PP','Kd']}"/>
 <CustomValidator name="KimLeang" :age="20" password="123"/>

</template>
<!-- css -->
<style scoped>
h1{
  color: red;
}
</style>
