<template>
    <!-- <h1 :class="$style['m-class']">Using Module Css with $syntax </h1> -->
    <h1 :class="myClass['another-class']">Using Module Css with $syntax </h1>
</template>

<style module="myClass">
.m-class{
    background-color: firebrick;
    color: white;
}
.another-class{
    background-color: black;
    color: white;
}
</style>