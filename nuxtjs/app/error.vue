<script setup>
// Define props to receive error object
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

// Handle error - clear error and go back
const handleError = () => clearError({ redirect: '/' })

// Set page meta
useHead({
  title: `${props.error.statusCode} - Error | MyBlog`
})
</script>


<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-content">
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <h2 class="error-message">{{ error.statusMessage || 'Something went wrong' }}</h2>
        
        <p class="error-description">
          <span v-if="error.statusCode === 404">
            The page you're looking for doesn't exist or has been moved.
          </span>
          <span v-else>
            An unexpected error occurred. Please try again later.
          </span>
        </p>

        <div class="error-actions">
          <button @click="handleError" class="btn btn-primary">
            Try Again
          </button>
          <NuxtLink to="/" class="btn btn-secondary">
            Go to Homepage
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style scoped>
.error-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 0;
  line-height: 1;
}

.error-message {
  font-size: 2rem;
  color: #2c3e50;
  margin: 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 1.5rem 0 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
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
  .error-code {
    font-size: 4rem;
  }
  
  .error-message {
    font-size: 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
  }
}
</style>