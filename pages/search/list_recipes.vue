<script setup lang="ts">

let searchQuery = ref("");

function redirect(){
    const router = useRouter();

    router.push('/recipe/123');
}

</script>


<template>
    <div class="container">
        <Header />
        <div class="search">
            <input
                type="text"
                class="form-control"
                id="searchTextField"
                placeholder="🔍 Search"
                v-model="searchQuery"
            />
        </div>
        <h1 class="quicksand-font fw-bold title">Recipes based on your ingredients</h1>
        <ul class="nav filter">
            <li class="nav-item">
                <a class="nav-link active" style="background: rgba(237, 106, 50, 0.8);border-radius: 21px" href="#">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Breakfast</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Lunch</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Dinner</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Snack</a>
            </li>
        </ul>

        <div class="quicksand-font fw-bold recipes">
            <div class="row">
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://images.aws.nestle.recipes/resized/e946b4da782649b04971c77492f53360_Pork_Adobo_944_531.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">SUPREME PORK ADOBO</p>
                        <p class="text"><span style="color: #ED6A32">MEDIUM</span>  •  ⏲ 70 mins  •  1500 Kcal</p>
                        
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="http://images.summitmedia-digital.com/yummyph/images/2016/January_2016/Menudo-640.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">PORK MENUDO</p>
                        <p class="card-text"><span style="color: #ED6A32">MEDIUM</span>  •  ⏲ 70 mins  •  1500 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://www.seriouseats.com/thmb/wfuTI3YPwre_p3iNk34cG4TkhEM=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">FILIPINO CHICKEN ADOBO</p>
                        <p class="card-text"><span style="color: #ED6A32">MEDIUM</span>  •  ⏲ 65 mins  •  1300 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://assets.bonappetit.com/photos/60419b8c970fc321b2086e48/1:1/w_1124,h_1124,c_limit/GO-Live-Pineapple-Pork-3.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">ADOBO WITH PORK FAT</p>
                        <p class="card-text"><span style="color: #FE0606">HARD</span> •  ⏲ 75 mins  •  1522 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="http://images.summitmedia-digital.com/yummyph/images/2016/May_2016/adobomainimage-640.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">CLASSIC CHICKEN ADOBO</p>
                        <p class="card-text"><span style="color: #0DC335">EASY</span>  •  ⏲ 75 mins  •  1561 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://eatlikepinoy.com/wp-content/uploads/2019/12/repolyo1.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">GINISANG REPOLYO</p>
                        <p class="card-text"><span style="color:#0DC335">EASY</span>  •  ⏲ 20 mins  •  561 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://i.pinimg.com/originals/b1/74/10/b174108fcd4029007e060cc761598b0a.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">FILIPINO PORK ADOBO</p>
                        <p class="card-text"><span style="color:#0DC335">EASY</span>  • ⏲ 70 mins  •  1211 Kcal</p>
                    </div>
                </div>
                <div class="card border-dark mb-3" @click="redirect()">
                    <img src="https://www.pinoyrecipe.net/wp-content/uploads/2021/05/Tuna-Bicol-Express-1200x900.jpg" class="card-img-top" >
                    <div class="card-body">
                        <p class="card-text">BICOL EXPRESS</p>
                        <p class="card-text"><span style="color: #FE0606">HARD</span>  • ⏲ 70 mins  •  1211 Kcal</p>
                    </div>
                </div>

            </div>

        </div>   
    </div>
    
</template>
<style scoped>
    .nav{
        color: #000000;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    .card-img-top{
        width: 634.74px;
        height: 186px;
    }
    .recipes{
        /* position: absolute; */
        padding-right: 100px;
        width: 1407px;
        height: 1966px;
        left: 182px;
        top: 426px;
        overflow-y: scroll;
        padding-left: 40px;
        overflow: hidden;
    }
    .card{
        margin-bottom: 100px;
        margin-right: 200px;
        width: 25rem;
        cursor: pointer;
    }
    button{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: flex-start;
        padding: 4px 12px;
        gap: 10px;

        width: 118px;
        height: 38px;

        border-radius: 3px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
    }
    .search{
        width: 100%;
        height: 52px;
    }

    .title{
        /* position: absolute; */
        width: auto;
        height: 73px;
        left: 175px;
        top: 255px;

        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 80px;

        color: #000000;
    }
    .filter{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 12px;

        /* position: absolute; */
        width: 496px;
        height: 38px;
        left: 171px;
        top: 345px;
        margin-bottom: 40px;
    }
</style>