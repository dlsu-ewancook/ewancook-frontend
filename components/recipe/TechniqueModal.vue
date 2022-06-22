<script setup lang="ts">
  const props = defineProps<{
    title: string,
    description: string,
    code: string
  }>(); 
</script>

<template>
  <div class="card">
    <iframe 
      :src="`https://www.youtube.com/embed/${ props.code }`" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        {{ props.title }}
      </h5>
      <p class="card-text">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 18rem;
}
</style>