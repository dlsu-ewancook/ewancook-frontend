<script setup lang="ts">

const imageUrlDict = {
  pork: "../../assets/images/cuts-of-pork.png",
  beef: "../../assets/images/cuts-of-beef.png",
  chicken: "../../assets/images/chicken.png",
  fish: "../../assets/images/fish-food.png",
  fruits: "../../assets/images/group-of-fruits.png",
  vegetables: "../../assets/images/group-of-vegetables.png",
  spices: "../../assets/images/pepper-shaker.png",
}

defineProps({
  type: String,
  title: String,
  image: String,
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
        :src="imageUrlDict[image]"
        class="card-img-top"
        alt="card-img-top"
      />
      <div class="card-body p-0 pt-3">
        <h5 class="card-title">{{title}}</h5>
      </div>
    </div>
  </div>
</template>
