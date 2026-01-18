<script setup>
import Footer from '~/components/Layouts/Footer.vue';
import Header from '~/components/Layouts/Header.vue';
</script>

<template>
    <div class="app-container">
        <Header/>

        <main class="main-content">
            <slot/>
        </main>

        <Footer/>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}
</style>