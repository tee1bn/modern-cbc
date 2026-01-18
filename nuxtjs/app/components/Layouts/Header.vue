<script setup>

</script>

<template>
    <div>
        <header class="header">
            <div class="header-content">
                <h1 class="logo">
                    <NuxtLink to="/">MyBlog</NuxtLink>
                </h1>
                <nav class="nav">
                    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                    <!-- <NuxtLink to="/create" class="nav-link">Create Post</NuxtLink>
                    <NuxtLink to="/about" class="nav-link">About</NuxtLink> -->
                </nav>
            </div>
        </header>

    </div>
</template>


<style scoped>
    @import url('~/assets/styles/header.css');
</style>
