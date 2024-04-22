<script setup>
const myRefFunc = (el)=>{
console.log(el)
el.textContent='Text Changed'
el.style.color = 'blue'
}
</script>
<template>
<h1 :ref="myRefFunc">This is the inital value</h1>
</template>