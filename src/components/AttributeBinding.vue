<script setup>
const google = "https://www.google.com"
const image = "https://watermark.lovepik.com/photo/20211120/large/lovepik-simple-picture_500447536.jpg"
const imageWidth = 400
const imageHeight = 400
</script>
<template>
    <a :href="google">Google</a>
    <img :src="image" alt="" :width="imageWidth" :height="imageHeight">
</template>