<script setup lang="ts">
  const props = defineProps<{
    title: string,
    imgUrl: string,
    alternatives?: string[]
  }>(); 
</script>

<template>
  <div class="card">
    <img :src="props.imgUrl" class="card-img-top" :alt="props.title">
    <div class="card-body" v-if="props.alternatives">
      <h5 class="card-title">
        {{ props.title }}
      </h5>
      <p class="card-text">Alternatives</p>
      <ul class="card-text">
        <li v-for="alt in props.alternatives" :key="alt">
          {{ alt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 18rem;
}
</style>