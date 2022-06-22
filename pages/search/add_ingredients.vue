<script setup lang="ts">
import Ingredient_card from "../../components/add_ingredients/ingredient_card.vue";
const imageUrlDict = {
  pork: "../../assets/images/cuts-of-pork.png",
  beef: "../../assets/images/cuts-of-beef.png",
  chicken: "../../assets/images/chicken.png",
  fish: "../../assets/images/fish-food.png",
  fruits: "../../assets/images/group-of-fruits.png",
  vegetables: "../../assets/images/group-of-vegetables.png",
  spices: "../../assets/images/pepper-shaker.png",
};

const ingredients = [
  {
    name: "Beef",
    type: "meats",
    image: "beef",
  },
  {
    name: "Chicken",
    type: "meats",
    image: "chicken",
  },
  {
    name: "Fish",
    type: "meats",
    image: "fish",
  },
  {
    name: "Pork",
    type: "meats",
    image: "pork",
  },
  {
    name: "Fish Sauce",
    type: "spices",
    image: "spices",
  },
  {
    name: "Pepper",
    type: "spices",
    image: "spices",
  },
  {
    name: "Salt",
    type: "spices",
    image: "spices",
  },
  {
    name: "Soy Sauce",
    type: "spices",
    image: "spices",
  },
  {
    name: "Eggplant",
    type: "vegetables",
    image: "vegetables",
  },
  {
    name: "Garlic",
    type: "vegetables",
    image: "vegetables",
  },
  {
    name: "Lettuce",
    type: "vegetables",
    image: "vegetables",
  },
  {
    name: "Apples",
    type: "fruits",
    image: "fruits",
  },
  {
    name: "Bananas",
    type: "fruits",
    image: "fruits",
  },
  {
    name: "Grapes",
    type: "fruits",
    image: "fruits",
  },
  {
    name: "Mangoes",
    type: "fruits",
    image: "fruits",
  },
  {
    name: "Oranges",
    type: "fruits",
    image: "fruits",
  },
  {
    name: "Tomatoes",
    type: "fruits",
    image: "fruits",
  },
];

let ingredient_list = ref([]);
let searchQuery = ref("");

function addToList(name, type, image) {
  ingredient_list.value.push({
    name,
    type,
    image,
  });
}

function removeItem(index){
  ingredient_list.value.splice(index, 1)
}

function getIngredients() {
  console.log("trigger");
  return ingredients.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
}

function searchRecipe() {
  window.location.href = '/search/list_recipes'
  // alert(ingredient_list.value.length);
}
</script>
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
                  :image="ingredient.image"
                  @click="addToList(ingredient.name, ingredient.type, ingredient.image)"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h1 class="quicksand-font">Spices</h1>
            <div class="d-flex flex-wrap">
              <div v-for="ingredient in getIngredients()">
                <Ingredient_card
                  class="me-2 mt-2"
                  v-if="ingredient.type == 'spices'"
                  :title="ingredient.name"
                  :type="ingredient.type"
                  :image="ingredient.image"
                  @click="addToList(ingredient.name, ingredient.type, ingredient.image)"
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
                  :image="ingredient.image"
                  @click="addToList(ingredient.name, ingredient.type, ingredient.image)"
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
                  :image="ingredient.image"
                  @click="addToList(ingredient.name, ingredient.type, ingredient.image)"
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
            <div v-for="(item, index) in ingredient_list" class="list-card mt-2" @click="removeItem(index)">
              <img :src="imageUrlDict[item.image]" :alt="item.type" />
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

<style>
.quicksand-font {
  font-family: "Quicksand", sans-serif;
}

.btn-special {
  background-color: #ed6a32;
  color: white;
  width: 100%;
}

.list-card {
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
  padding: 0.25rem 1rem;
}

.list-card > img {
  width: 50px;
}

.list-card > span {
  margin-left: 1rem;
  font-weight: bold;
}

.list-card:hover{
  background-color: lightgrey;
}
</style>
