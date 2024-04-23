<script setup>
const vFormDirective ={
    mounted:(el,binding)=>{
        el.style.fontSize = binding.value+'px'
    }
}
// const vFormDirective =  (el)=> el.style.fontSize = binding.value+'px';
</script>
<template>
<div v-form-directive="100">
    Using simple directive
</div>
</template>