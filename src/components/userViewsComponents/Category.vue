<template>
  <section class="w-full h-screen">

     <div class="h-1/5 space-y-3 text-center uppercase font-works-sans">
       <p class="text-gray-600 font-works-sans tracking-widest">browse products by category</p>
       <h1 class="text-2xl lg:text-5xl tracking-widest">category</h1>
     </div>
    <div class="h-4/5">
      <img src="https://images.unsplash.com/photo-1656376406210-24191cf83c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="w-full h-full">
    </div>
  </section>


  
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
   
  setup(){
    const store =useStore();
    const products = computed(()=>store.state.products.allProducts);
    const categories = computed(()=>store.state.products.categories);
    const productsByCategory =ref([]);

    return {
      productsByCategory,
      products,
      categories
     }
  }
}
</script>



