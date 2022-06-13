<script setup lang="ts">
import Ingredient_card from "../../components/add_ingredients/ingredient_card.vue";
const imageUrlDict = {
  meats: "../../assets/images/cuts-of-pork.png",
  others: "../../assets/images/cuts-of-beef.png",
};

const ingredients = [
  {
    name: "Garlic",
    type: "others",
    image: "something",
  },
  {
    name: "Beef",
    type: "meats",
    image: "something",
  },
  {
    name: "Pork",
    type: "meats",
    image: "something",
  },
  {
    name: "Beef1",
    type: "meats",
    image: "something",
  },
  {
    name: "Pork1",
    type: "meats",
    image: "something",
  },
  {
    name: "Beef2",
    type: "meats",
    image: "something",
  },
  {
    name: "Pork2",
    type: "meats",
    image: "something",
  },
  {
    name: "Beef3",
    type: "meats",
    image: "something",
  },
  {
    name: "Pork3",
    type: "meats",
    image: "something",
  },
];

let ingredient_list = ref([]);
let searchQuery = ref("");

function addToList(name, type) {
  ingredient_list.value.push({
    name,
    type,
  });
}

function getIngredients() {
  console.log("trigger");
  return ingredients.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
}

function searchRecipe() {
  // Add search function here
  alert(ingredient_list.value.length);
}
</script>
<style src="../assets/css/add_ingredients.css"></style>
<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-9">
        <h1 class="quicksand-font fw-bold">Ingredients</h1>
        <div class="row">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="searchTextField"
              placeholder="🔍 Search"
              v-model="searchQuery"
            />
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Meats</h1>
            <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'meats'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  @click="addToList(ingredient.name, ingredient.type)"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Vegetables</h1>
           <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'vegetables'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  @click="addToList(ingredient.name, ingredient.type)"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Fruits</h1>
            <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'fruits'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  @click="addToList(ingredient.name, ingredient.type)"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Condiments</h1>
            <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'condiments'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  @click="addToList(ingredient.name, ingredient.type)"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Others</h1>
            <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'others'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  @click="addToList(ingredient.name, ingredient.type)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ingredient List</h5>
            <div v-for="item in ingredient_list" class="list-card mt-2">
              <img :src="imageUrlDict[item.type]" :alt="item.type" />
              <span>{{ item.name }}</span>
            </div>
            <span v-if="ingredient_list.length == 0" class="text-secondary"
              >Your list is empty.</span
            >
          </div>
        </div>
        <button
          type="button"
          class="btn btn-special quicksand-font mt-4"
          @click="searchRecipe"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
