<script setup>
// get postId from the route
const postId = useRoute().params.id

const {data: post, pending, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
console.log(post);

useHead({
  title: () => post.value ? `${post.value.title} - MyBlog` : 'Post - MyBlog',
  meta: [
    { 
      name: 'description', 
      content: () => post.value ? post.value.body.substring(0, 150) : 'Read this post on MyBlog' 
    }
  ]
})

// route validation 
definePageMeta({
  validation: async (r) => {
    const id = Number(r.params.id)

    if (isNaN(id) || id < 1 || id > 100) {
      return false 
    }

    return true
  }
})

</script>

<template>
  <div class="post-page">

    <div v-if="pending" class="loading">
      <p>Loading post...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>Error loading post: {{ error.message }}</p>
      <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
    </div>

    <article v-else class="post-content">
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <span class="author">Author: User {{ post.userId }}</span>
          <span class="post-id">Post #{{ post.id }}</span>
        </div>
      </header>

      <div class="post-body">
        <p>{{ post.body }}</p>
      </div>

      <div class="post-actions">
        <NuxtLink to="/" class="btn btn-secondary">
          ← Back to Home
        </NuxtLink>
        <!-- <NuxtLink :to="`/blog/${post.id}/edit`" class="btn btn-primary">
          Edit Post
        </NuxtLink> -->
        <NuxtLink :to="`/user/${post.userId}/posts`" class="btn btn-primary">
          View Author's Posts
        </NuxtLink>
      </div>
    </article>
  </div>
</template>

<style scoped>
.post-page {
  max-width: 800px;
  margin: 55px auto;
}

.loading,
.error {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
}

.error {
  color: #e74c3c;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}

.post-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.post-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: capitalize;
  line-height: 1.3;
}

.post-meta {
  display: flex;
  gap: 2rem;
  color: #7f8c8d;
  font-size: 0.95rem;
}

.author,
.post-id {
  font-weight: 500;
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;
}

.post-body p {
  margin-bottom: 1rem;
}

.post-actions {
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 2px solid #ecf0f1;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 1.8rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .post-actions {
    flex-direction: column;
  }
  
  .btn {
    text-align: center;
  }
}
</style>