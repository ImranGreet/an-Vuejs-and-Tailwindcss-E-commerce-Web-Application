<template>
  <section class="px-2 lg:px-6 shadow-md z-50">
    <div class="w-full h-auto lg:h-16  
    flex justify-between 
    items-center font-works-sans">
     
     <div class="w-1/2 lg:w-4/5 px-2 lg:px-0 
     flex justify-start 
     lg:justify-evenly items-center 
     space-x-3 lg:space-x-12">

        <router-link to="/" 
          class="font-works-sans uppercase
           text-sky-900/75 tracking-tight 
           text-2xl lg:text-4xl 
           font-extrabold pb-2">
           xenmesh
        </router-link>
        
          <button class="block lg:hidden">
            <font-awesome-icon icon="fa-solid fa-align-justify"/>
          </button>

          <router-link :to="{name:`products`}" 
            class="hidden lg:block uppercase text-md 
            tracking-wide lg:hover:underline 
            lg:hover:underline-offset-4 
            duration-75 delay-100">
            Our Products
          </router-link>

          <router-link 
            :to="{name:`category`,params:{category:nav}}" 
            v-for="nav in navigationsWays" :key="nav" 
            class="hidden lg:block uppercase text-md 
            tracking-wider lg:hover:underline 
            lg:hover:underline-offset-4 
            duration-75 delay-100">
            {{nav}}
          </router-link>

          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </router-link>

      </div>
     
     <div class="w-1/2 lg:w-1/5 flex justify-end space-x-3 
     text-xl lg:text-2xl text-gray-600">

      <router-link :to="{name:`wish`}"
        class="space-x-2 lg:hover:shadow-xl">
        <font-awesome-icon icon="fa-solid fa-heart"/>
        <span class="inline-block font-works-sans ">({{wishedItems}})</span>
      </router-link>

       <router-link :to="{name:`cart`}" class="space-x-2 lg:hover:shadow-xl">
        <font-awesome-icon icon="fa-solid fa-bag-shopping"/>
        <span class="inline-block  font-works-sans ">({{cartedItems}})</span>
       </router-link>

      <router-link :to="{name:`login`}" class="space-x-2 lg:hover:shadow-xl">
        <font-awesome-icon icon="fa-solid fa-user"/>
      </router-link>

     </div>

    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
    name:"NavigationsPath",

    setup(){
        const store = useStore();
        const navigationsWays = computed(()=>store.state.products.categories);
        const wishedItems = computed(()=>store.state.cart.wishIteams.length);
        const cartedItems = computed(()=>store.state.cart.cartIteams.length);
        
        return {
           navigationsWays,
           wishedItems,
           cartedItems,
        }

    }

}
</script>


