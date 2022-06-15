<script setup lang="ts">
import HeaderVue from '~~/components/Header.vue';

const route = useRoute();
const { recipeID } = route.params;
const primaryColor = '#ED6A32';

let imageUrl = 'https://img-global.cpcdn.com/recipes/59343c2d877032eb/1200x630cq70/photo.jpg';
let backgroundImage = `url(${imageUrl})`;
</script>

<template>
    <HeaderVue />
    <div class="banner">

    </div>
    <main class="container mt-4">
        <div class="d-flex flex-column flex-lg-row align-items-stretch gap-4">
            <!-- Recipe Card -->
            <div class="card flex-fill p-4" id="recipeCard">
                <article class="card-body">
                    <h1 class="card-title" id="recipeTitle">
                        Recipe {{ recipeID }}
                    </h1>
                    <h2 class="card-text">Recipe {{ recipeID }} description</h2>
                    <div class="row" id="ingredientsList">
                        <div class="section-title col-lg-2">Ingredients</div>
                        <div class="col-lg-10">
                            <ul>
                                <li v-for="item in [1, 2, 3, 4]" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row" id="cookingInstructions">
                        <div class="section-title col-lg-2">Cooking Instructions</div>
                        <div class="col-lg-10">
                            <ol>
                                <li v-for="item in [1, 2, 3, 4]" :key="item">
                                    {{ item }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>
            <aside class="d-flex flex-column align-items-stretch gap-2 w-25">
                <!-- Metadata -->
                <div class="card p-3" id="metadataCard">
                    <div class="card-body d-flex flex-column gap-1">
                        <div>
                            <div class="section-title">Difficulty</div>
                            <div class="metadata-desc">Medium</div>
                        </div>
                        <div>
                            <div class="section-title">Estimated Time</div>
                            <div class="metadata-desc">70 Minutes</div>
                        </div>
                        <div>
                            <div class="section-title">Servings</div>
                            <div class="metadata-desc">4 Servings</div>
                        </div>
                    </div>
                </div>
                <!-- Video Instruction -->
                <div class="d-flex flex-column align-items-end text-end" id="videoInstructionCard">
                    <div>Video Instruction</div>
                    <iframe 
                        src="https://www.youtube.com/embed/Ix5Dnud1bl0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen />
                </div>
                <!-- Recipe Link -->
                <div class="d-flex flex-column align-items-end text-end" id="recipeLinkCard">
                    <div>Learn more at</div>
                    <a href="https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/" class="overflow-auto">https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/</a>
                </div>
            </aside>
        </div>
    </main>
</template>

<style scoped>
    .banner {
        background-image: v-bind(backgroundImage);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 10vh;
        min-height: 250px;
    }

    aside {
        font-family: 'Quicksand', sans-serif;
    }

    @media (min-width: 992px) {
        aside {
            transform: translateY(-150px);
        }
    }
        
    .section-title {
        color: v-bind(primaryColor);
        text-transform: uppercase;
        font-weight: bold;
    }

    #recipeTitle {
        font-weight: bold;
    }

    #recipeCard {
        background-color: #F8F8F8;
        border-color: transparent;
        border-radius: 20px;
        font-family: 'Quicksand', sans-serif;;
    }

    #metadataCard {
        border-width: 4px;
        border-radius: 30px;
        border-color: v-bind(primaryColor);
    }

    .metadata-desc {
        text-transform: uppercase;
    }

    a {
        color: black;
        font-weight: bold;
        text-decoration: none;
    }
</style>