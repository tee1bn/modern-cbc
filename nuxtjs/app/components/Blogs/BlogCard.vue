<script setup>
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })

    const truncateBody = (text) => {
        const maxLength = 100
        if(text.length > maxLength) {
            return text.substring(0, maxLength) + '...'
        }
        return text
    }
</script>


<template>
  <div class="blog-card">
    <h2 class="blog-title">{{ post.title }}</h2>
    <p class="blog-body">{{ truncateBody(post.body) }}</p>
    <div class="blog-meta">
      <span class="author">User ID: {{ post.userId }}</span>
      <NuxtLink :to="`/blog/${post.id}`" class="read-more">
        Read More →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.blog-title {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: capitalize;
  line-height: 1.4;
}

.blog-body {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.author {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.read-more {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.read-more:hover {
  color: #2980b9;
}
</style>