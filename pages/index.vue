<script setup lang="ts">
const imgUrl = "https://media.istockphoto.com/photos/cooking-by-a-chef-italian-lasagna-frying-a-dressing-in-a-frying-pan-picture-id1186198866?k=20&m=1186198866&s=612x612&w=0&h=63bz4P540h1Yp0a-g65vCQfuqoliuZ_jRP6ZwOYBlXk="
</script>

<template>
    <div class="container" style="margin-top:0px">
        <Header />
        <div>
            <div class="row">
                <div class="col-md-6" style="background-color:#ED6A32; margin-top:0px;">
                    <div class="row" style="margin:50px;">
                        <div class="col-md-12">
                            <div class="row" style="margin-top:30px">
                                <h2 class="texts" style="font-size:40px">Streamline your<br>home cooking with</h2>
                            </div>
                            <div class="row" style="margin-top:-5px">
                                <h1 class="texts" style="font-size:60px">ewancook.</h1>
                            </div>
                            <div class="row" style="margin-top:30px">
                                <h3 class="texts-nb" style="font-size:30px">Search for recipes based on what<br>you have instead of shoppping for<br>your recipe.</h3>
                            </div>

                            <NuxtLink type="button" to="/search/add_ingredients" class="btn btn-outline-light texts-nb" style="font-size:20px; margin-top:30px; margin-bottom:50px;">Search With Your Ingredients</NuxtLink>
                        </div>
                    </div>    
                </div>
                <div class="col-md-6">
                    <img :src="imgUrl" style="object-fit: cover; width:100%; height:100%; z-index: 0;">
                </div>
            </div> 
        </div>

        <div style="background-color:white; width:100%; height:100%; margin-top:-60px">
            <div class="row" style="margin:50px;">
                <div class="col-md-12">
                    <div class="row" style="margin-top:50px;">
                        <h4 class="texts-below" style="font-size:20px">ewancook.</h4>
                    </div>
                    <div class="row" style="margin-top:-5px;">
                        <h3 class="texts-nb-below" style="font-size:15px;">Transforming the way you cook.</h3>
                    </div>
                </div>
            </div>   
        </div>
        
    </div>
</template>

<style>
    .texts{
        color: white;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
    }

    .texts-below{
        color: black;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
    }

    .texts-nb{
        color: white;
        font-family: 'Quicksand', sans-serif;
    }

    .texts-nb-below{
        color: black;
        font-family: 'Quicksand', sans-serif;
    }

</style>