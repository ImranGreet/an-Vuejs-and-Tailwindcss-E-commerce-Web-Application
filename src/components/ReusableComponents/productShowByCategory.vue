<template>
  <section class="w-11/12 mx-auto h-fit my-20">

  
   <div class="flex flex-col lg:flex-row justify-between items-center lg:space-x-[410px] lg:relative">
    <div class="w-full lg:w-1/4 space-y-4 lg:absolute lg:top-24 lg:left-10">
      <form action="#" class="w-full space-y-4 ">

        <div class="text-start space-y-3 border border-gray-600/20 p-3">
          <h3 class="uppercase text-xl tracking-widest  font-lato">search</h3>

          <input type="text" name="" id="" 
          class="w-11/12 mx-auto px-5 
           py-2 border-2
           border-gray-700/20 
           rounded-sm focus:outline-none">
          <div class="space-x-3">

             <button type="submit" 
              class="uppercase bg-green-500/70 
              px-5 py-1 rounded-sm 
              text-white">
              go
             </button>

             <button type="reset" 
              class="uppercase bg-gray-500/70 
              px-5 py-1 rounded-sm 
              text-white">
              reset
             </button>

          </div>
        </div>

        <div class="w-full border border-gray-600/20 p-3">

          <h3 class="uppercase tracking-widest  text-xl font-lato">sort by</h3>

          <div class="w-full">

            <select name="" id="" 
              class=" w-full px-5 py-2.5 border 
              border-gray-600/20 
              focus:outline-none text-xl">
                <option value="" selected="selected">sort Product by</option>
                <option value="maxprice">price(low>high)</option>
                <option value="maxprice">price(high>low)</option>
            </select>

          </div>

        </div>

        <div class="w-full border border-gray-600/20 p-3">
          <h3 class="uppercase tracking-widest  
            text-lg font-lato">
            filter by price
          </h3>
          <input type="range" name="" id="" 
          class="w-full bg-gray-800">
        </div>

      </form>

      <div class="w-full space-y-2 border border-gray-600/20 p-3">

        <button @click="toggling()" class="w-6 h-6 
          flex flex-col justify-center
          items-center bg-slate-800 
          text-slate-200 border 
          border-gray-700/20 
          rounded-full shadow-xl 
          shadow-rose-200 
          animate-bounce 
          drop-shadow-lg">
          <span v-if="!buttonShow">
            <font-awesome-icon icon="fa-solid fa-plus"/>
          </span>
          <span v-if="buttonShow" class="duration-75 delay-100 text-red-500 font-extrabold">
            <font-awesome-icon icon="fa-solid fa-minus"/>
          </span>
         </button>

        <div v-if="buttonShow" class="flex flex-col justify-start space-y-1 duration-150 delay-300">
          <router-link
            :to="{name:`products`}" v-for="cat in categories" :key="cat"
            class="capitalize font-lato 
            font-extralight tracking-widest 
            lg:hover:underline 
            lg:hover:underline-offset-4 
            duration-75 delay-100" >
            {{cat}}
          </router-link>
        </div>
      </div>

    </div>
    <div class="w-full lg:w-3/4 mt-8">
           
      <div class="flex flex-wrap justify-between iteams-center gap-y-8 mt-16">
        <Product v-for="product in allProducts" :key="product.id" :productsDetails="product"></Product>
      </div>

     
    </div>
   </div>
  </section>
</template>

<script>
import { computed, onMounted ,ref} from 'vue'
import { useStore } from 'vuex';
import Product from './Product.vue';
import PaginationButton from '@/utility/paginationButton.vue';


export default {
    name: "productShowByCategory",
   
    components: {
    Product,
    PaginationButton
},
    setup() {
      const store =useStore();
      
        const categories =computed(()=>store.state.products.categories);
        const allProducts =computed(()=>store.state.products.productByCategory);
        const buttonShow=ref(false);

        function toggling(){
        buttonShow.value=!buttonShow.value;
        };
      
        return {
            categories,
            allProducts,
            buttonShow,
            toggling
        };
    },
 
}
</script>
