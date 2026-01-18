<script setup>
import BlogCard from '~/components/Blogs/BlogCard.vue';

// fetching data using useFetch
const {data: posts, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts')

// page Meta
useHead({
    title: 'Home -MyBlog',
    meta: [
        {
            name: 'description', 
            content: 'Welcome to MyBlog - Read the latest posts'
        }
    ]
})

</script>

<template>
  <div class="home-page">
    <h1 class="page-title">Latest Blog Posts</h1>
    
    <!-- Loading state -->
    <div v-if="pending" class="loading">
      <p>Loading posts...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="error">
      <p>Error loading posts: {{ error.message }}</p>
    </div>

    <!-- Posts grid -->
    <div v-else class="posts-grid">
      <BlogCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </div>
</template>

<style scoped>
 @import url('~/assets/styles/index.css');
</style>