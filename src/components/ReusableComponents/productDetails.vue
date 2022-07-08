<template>
  <section class="w-full h-fit flex flex-col lg:flex-row justify-between items-center my-10 lg:my-20 font-works-sans">

    <div class="w-full lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1656215706608-4adcf6c8391f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" class="w-full h-96">
    </div>

    <div class="w-full lg:w-3/5 space-y-14 px-4 lg:px-16">

        <div class="space-y-3">
            <h1 class="text lg:text-5xl text-gray-800 tracking-wide font-lato font-medium">Snicker Shoes</h1>
            <p class="text-gray-700 text-md text-justify tracking-wide leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim minus iste. Voluptates, consequuntur animi. Deserunt nostrum quidem perspiciatis quia fuga reprehenderit animi.</p>
            <h1 class="text-gray-800 font-normal font-lato text-2xl lg:text-5xl">$160.00</h1>
        </div>

        <div class="w-full space-y-6 lg:space-y-10">

           <div class="flex justify-start items-center lg:items-start  space-x-8 lg:space-x-10">
            <input type="number" v-model="productQuantity" name="" id="" class="w-10 lg:w-16 h-8 lg:h-12 border-2 border-gray-600 text-center text-2xl focus:outline-none">
            <button class="grow-0 capitalize w-32 lg:w-36 h-8 lg:h-12 bg-slate-800 lg:hover:bg-slate-900/75 text-white px-2 lg:px-6">Add to cart</button>
            <button class="w-12 lg:w-16 h-8 lg:h-12 bg-gray-800 text-white text-xl lg:text-3xl"><span><font-awesome-icon icon="fa-solid fa-heart" /></span></button>
           </div>

           <div class="w-24 lg:w-36">
            <button @click="$router.back()" class="w-full h-full bg-gray-800 text-white text-lg lg:text-xl px-2 lg:px-6 py-0.5 lg:py-1">Go Back</button>
           </div>
        </div>

       
    </div>
  </section>
   <div class="w-full lg:w-2/3 mx-auto space-y-8 px-2 lg:px-0 font-works-sans">
       <h1 class="text-2xl lg:text-6xl">Descriptions</h1>

          <p class="text-lg tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate omnis dignissimos illum temporibus nesciunt debitis. Omnis, exercitationem? Ducimus cumque exercitationem non et vero accusamus consectetur voluptate architecto, maxime ipsam quos magnam nesciunt laudantium tempore illo labore eum autem, quisquam adipisci. Natus vitae omnis, necessitatibus illum quasi perferendis doloremque, cupiditate aperiam ipsum vel ipsam aliquid, laudantium eos recusandae. Omnis tempora nulla quibusdam modi repellat consequatur harum sint, incidunt hic amet expedita atque explicabo possimus, dicta cumque.</p>
        </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute ,useRouter} from 'vue-router';
export default {
    name: "productView",
    setup(){
        const store = useStore();
        const route =useRoute();
        const router = useRouter();
        const productQuantity=ref(1);

        const productToDispaly =computed(()=>{
            store.state.products.singleProductDetails
            
        });
       
        return {
          productToDispaly,
          productQuantity,
        }
    }

}
</script>

