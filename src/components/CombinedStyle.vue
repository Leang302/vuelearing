<template>
    <h2 class="g-1">Another Global style</h2>
    <h2 class="l-1">Another Local style</h2>
</template>
<!-- global styling -->
<style>
.g-1{
    background-color: fuchsia;
    color: white;
}
</style>
<!-- local styling -->
<style scoped>
.l-1{
    background-color: black;
    color: white;
}
</style>