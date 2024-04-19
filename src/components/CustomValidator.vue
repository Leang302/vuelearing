<script setup>
defineProps({
    name:{
        type:String,
        validator:(propValue)=>{
            return ['Huxin','Jordan'].includes(propValue)
        }
    },
    age:{
type:Number,
validator:(propsValue)=>propsValue>=18?true:false
    },
    password:{
        type:String,
        validator:(propsValue)=>propsValue.length>=8
    }
})
</script>
<template>
<h1>Name: {{name}}</h1>
<h1>Age: {{age}}</h1>
<h1>Password: {{password}}</h1>
</template>