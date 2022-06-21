<script setup lang="ts">
import { ref } from 'vue';

interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    metadata: {
        difficulty: string;
        time: string;
        servings: number;
    };
    video: string;
    link: string;
    image: string;
}

const route = useRoute();
const { recipeID } = route.params;
const primaryColor = '#ED6A32';

let recipe: Recipe = {
    id: parseInt(recipeID as string),
    name: 'Pork Adobo Recipe',
    description: 'Basic Filipino Prok Adobo with Soy Sauce, Vinegar, and Garlic. This delicious dish is perfect when served over newly cooked white rice.',
    ingredients: [
        '2 lbs pork belly',
        '2 tablespoons garlic minced or crushed',
        '5 pieces dried bay leaves',
        '4 tablespoons vinegar',
        '1/2 cup soy sauce',
        '1 tablespoon peppercorn',
        '2 cups water',
        'Salt to taste'
    ],
    instructions: [
        'Combine the pork belly, soy sauce, and garlic then marinade for at least 1 hour',
        'Heat the pot and put-in the marinated pork belly then cook for a few minutes',
        'Pour remaining marinade including garlic.',
        'Add water, whole pepper corn, and dried bay leaves then bring to a boil. Simmer for 40 minutes to 1 hour',
        'Put-in the vinegar and simmer for 12 to 15 minutes',
        'Add salt to taste',
        'Serve hot. Share and enjoy!',
    ],
    metadata: {
        difficulty: 'medium',
        time: '70 minutes',
        servings: 4
    },
    video: 'Ix5Dnud1bl0',
    link: 'https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/',
    image: 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Best-Pork-Adobo-Recipe.jpg'
}
let backgroundImage = `url(${recipe.image})`;

let hoverIngredient = ref(null);
</script>

<template>
    <Header />
    <div class="banner" />
    <div class="container my-4">
        <div class="d-flex flex-column flex-lg-row align-items-stretch gap-4">
            <!-- Recipe Card -->
            <main class="card flex-fill p-4" id="recipeCard">
                <article class="card-body">
                    <h1 class="card-title fw-bold" id="recipeTitle">
                        {{ recipe.name }}
                    </h1>
                    <h2 class="card-text fs-4">{{ recipe.description }}</h2>
                    <div class="row" id="ingredientsList">
                        <div class="section-title col-lg-2 text-uppercase fw-bold">Ingredients</div>
                        <div class="col-lg-10">
                            <ul @mouseenter="hoverIngredient = 'Pork Belly'">
                                <li v-for="item in recipe.ingredients" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row" id="cookingInstructions">
                        <div class="section-title col-lg-2 text-uppercase fw-bold">Cooking Instructions</div>
                        <div class="col-lg-10">
                            <ol>
                                <li v-for="step in recipe.instructions" :key="step">
                                    {{ step }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </article>
            </main>
            <aside class="d-flex flex-column align-items-stretch gap-2">
                <!-- Metadata -->
                <div class="card p-3" id="metadataCard">
                    <div class="card-body d-flex flex-column gap-1">
                        <div>
                            <div class="section-title fw-bold text-uppercase">Difficulty</div>
                            <div class="metadata-desc text-uppercase">{{ recipe.metadata.difficulty }}</div>
                        </div>
                        <div>
                            <div class="section-title fw-bold text-uppercase">Estimated Time</div>
                            <div class="metadata-desc text-uppercase">{{ recipe.metadata.time }}</div>
                        </div>
                        <div>
                            <div class="section-title fw-bold text-uppercase">Servings</div>
                            <div class="metadata-desc text-uppercase">{{ recipe.metadata.servings }} Servings</div>
                        </div>
                    </div>
                </div>
                <!-- Video Instruction -->
                <div class="d-flex flex-column align-items-lg-end text-lg-end" id="videoInstructionCard">
                    <div id="videoInstructionTitle" class="fw-semibold">Video Instruction</div>
                    <iframe 
                        :src="`https://www.youtube.com/embed/${ recipe.video }`" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen />
                </div>
                <!-- Recipe Link -->
                <div class="d-flex flex-column align-items-lg-end text-lg-end" id="recipeLinkCard">
                    <div>Learn more at</div>
                    <a :href="recipe.link" class="overflow-auto fw-bold">{{ recipe.link }}</a>
                </div>

                <RecipeIngredientCard v-if="hoverIngredient"
                    :title="hoverIngredient"
                    img-url="https://upload.wikimedia.org/wikipedia/commons/4/49/Schweinebauch-2.jpg"
                    :alternatives="['Pork Bacon', 'Beef Bacon', 'Pork butt', 'Soy', 'Tofu', 'Tempeh']" />
            </aside>
        </div>
    </div>
</template>

<style scoped>
    * {
        font-family: 'Quicksand', sans-serif;
    }

    .banner {
        background-image: v-bind(backgroundImage);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 10vh;
        min-height: 250px;
    }

    @media (min-width: 992px) {
        aside {
            transform: translateY(-150px);
        }
    }
        
    .section-title {
        color: v-bind(primaryColor);
    }

    #recipeCard {
        background-color: #F8F8F8;
        border-color: transparent;
        border-radius: 20px;
    }

    #metadataCard {
        border-width: 4px;
        border-radius: 30px;
        border-color: v-bind(primaryColor);
    }

    a {
        color: black;
        text-decoration: none;
    }

    #videoInstructionTitle {
        text-transform: uppercase;
        color: #A3A1A1;
    }
</style>