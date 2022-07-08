
 <template>
    <section class="w-full h-auto space-y-16">

        <div class="uppercase text-center space-y-4">
            <p class="text-gray-600 font-works-sans tracking-widest">
              see whats new around
            </p>
            <h1 class="text-gray-900 font-lato text-2xl lg:text-6xl 
              font-semibold tracking-wide">
              sort products
            </h1>
        </div>

       <div class="w-full lg:w-11/12 mx-auto h-auto
        flex flex-col lg:flex-row lg:flex-wrap justify-between items-center gap-y-6">
            <Product 
              v-for="product in products" :key="product.id" 
              :productsDetails="product">
            </Product>
       </div>

      <div class="flex space-x-3">

           <button @click="prev()"  type="button" :disabled="isPrevButtonWorking"
            class=" w-16 h-16 flex flex-col justify-center 
            items-center text-red-700 lg:hover:bg-slate-800 lg:hover:text-white duration-100 delay-150
            text-5xl px-3 py-2 
            border tracking-widest uppercase" 
            :class="{'cursor-not-allowed ':isPrevButtonWorking}"> 
            <span class="text-lg">
              <font-awesome-icon icon="fa-solid fa-angles-left"/>
            </span>
          </button>

           <button @click="next()"  type="button"  :disabled="isNextButtonWorking"
            
            class="w-16 h-16 flex flex-col justify-center items-center 
            text-center text-red-700 text-2xl lg:hover:bg-slate-800 lg:hover:text-white duration-100 delay-150
            px-3 py-2 border tracking-widest uppercase"
            :class="{'cursor-not-allowed':isNextButtonWorking}"> 
            <span class="text-lg">
              <font-awesome-icon icon="fa-solid fa-angles-right"/>
            </span>

          </button>
      </div>
      
    </section>
 </template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import PaginationButton from '@/utility/paginationButton.vue';
import Product from '../ReusableComponents/Product.vue';
import PaginateToElements from '../ReusableComponents/paginateToElements.vue';

export default {
    name: "sortProducts",
     components: { 
      PaginationButton, 
      Product, 
      PaginateToElements
    },

    setup() {
        const store = useStore();
        const loadedIteams =ref(4);
        const previusIteams =ref(0);
        const loadedIteamsToBeSelect =store.state.products.sortedProducts;
        const sortProducts =store.state.products.sortedProducts
        const isPrevButtonWorking =ref(true);
        const isNextButtonWorking =ref(false);
        const products = computed(() => 
          sortProducts.slice(previusIteams.value, loadedIteams.value));
        
        function next(){
          if(loadedIteams.value<sortProducts.length){
            loadedIteams.value+=4;
            previusIteams.value+=4;
            isPrevButtonWorking.value=false;
          }else if(loadedIteams.value>=sortProducts.length){
            isNextButtonWorking.value=true;
          }
        }

        function prev(){
          if (loadedIteams.value>=8){
            loadedIteams.value-=4;
            previusIteams.value-=4;
          }else if(loadedIteams.value=4){
            isPrevButtonWorking.value=true;
            isNextButtonWorking.value=false;
          }
        }

        return {
            products,
            loadedIteams,
            previusIteams,
            loadedIteamsToBeSelect,
            isPrevButtonWorking,
            isNextButtonWorking,
            sortProducts,
            next,
            prev,
        };
    },
   
}
</script>

