<script setup lang="ts">

const imageUrlDict = {
  "meats": "../../assets/images/cuts-of-pork.png",
  "others": "../../assets/images/cuts-of-beef.png"
}

defineProps({
  type: String,
  title: String
})

</script>
<style>
  .card-width {
    width: 150px
  }

  .card-width:hover {
    background-color: #FFD18B;
  }
</style>
<template>
  <div class="card card-width m-0 p-0">
    <div class="card-body">
      <img
        :src="imageUrlDict[type]"
        class="card-img-top"
        alt="card-img-top"
      />
      <div class="card-body p-0 pt-3">
        <h5 class="card-title">{{title}}</h5>
      </div>
    </div>
  </div>
</template>
