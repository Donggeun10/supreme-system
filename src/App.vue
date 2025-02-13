<script setup lang="js">
import Footer from './components/AppFooter.vue'
import Header from './components/AppHeader.vue'
import Svg from './components/AppSvg.vue'
</script>

<template>
    <Svg/>

    <Header />

    <div class="container">
        <router-view />
    </div>

    <Footer/>
</template>