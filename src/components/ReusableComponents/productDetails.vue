<template>
    <section class=" w-full lg:w-11/12 mx-auto bg-slate-50 my-20 font-works-sans">
       <div class="w-full h-auto lg:h-[650px]  flex flex-col lg:flex-row justify-center lg:space-x-4 items-center">
          <div class="w-full lg:w-1/2 h-full">
             <img :src=singleProduct.image :alt="singleProduct.title" class="w-full h-full">
          </div>
          <div class="w-full lg:w-1/2 h-full flex flex-col justify-center space-y-8 px-3 lg:px-0">

             
                <headingAndtext>
                <template #text>
                     <p class="lg:text-start text-center">Category:{{singleProduct.category}}</p>
                </template>

                 <template #heading>
                   <h1 class="text-start text-2xl lg:text-5xl font-libre-franklin">{{singleProduct.title}}</h1>
                </template>
             </headingAndtext>
             

           <div class="space-y-4">
               <p class="capitalize tracking-wider leading-relaxed">{{singleProduct.description}}</p>
               <h1 class="text-5xl"><span>&#2547;</span>{{Math.floor(singleProduct.price)*92}}</h1>
           </div>

           <div class="flex space-x-3">
            <input type="number"  v-model="productQuantity" 
            class="px-4 w-10 lg:w-14  bg-slate-800  text-white"/>

            <button class="px-3 lg:px-4 py-1.5 lg:py-2
             bg-slate-800 hover:bg-stone-900
              text-white">Add to cart</button>

            <button class="px-4   bg-slate-800 text-white">
                 <span class="inline-block text-2xl text-slate-100">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                   </span>
            </button>
           </div>

           <button @click="$router.back()" 
           class="tex-white px-2.5 py-1 lg:px-3 lg:py-2
            bg-slate-700 text-white w-36 " >
            <span class="text-pink-500 px-1">
               <font-awesome-icon icon="fa-solid fa-angle-left" />
            </span>
            Go Back
           </button>

          </div>
       </div>
    </section>
</template>

<script>
import { computed,  ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

export default {
    name: "productView",
    setup(){
        const store = useStore();
        const route =useRoute();
        const productQuantity=ref(1);
        const singleProduct =computed(()=>store.state.products.singleProductDetails);
       
        return {
          singleProduct,
          productQuantity,
         
        }
    }

}
</script>

