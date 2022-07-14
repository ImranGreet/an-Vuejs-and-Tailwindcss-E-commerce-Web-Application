<template>
    <section class="w-72 h-96  flex flex-col 
    justify-between border shadow-lg 
    shadow-blue-300/20 rounded-md font-works-sans">

              <div class="w-full h-3/5">
                <router-link :to="{name:`productDetails`,params:{id:productId}}">
                  <img :src="productThumbnail" :alt="productTitle" class="w-full h-full rounded-sm">
                </router-link>
              </div>

              <div class="flex justify-around h-[40px]  
              bg-gray-900/90 text-white">
              
                <button @click="addTocart(productId)" class="capitalize font-lato tracking-wider">
                   <span class="inline-block pr-2 text-xl">
                    <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                   </span> add to cart
                </button>

                <button @click="addToWishList(productId)">
                   <span class="inline-block text-2xl text-slate-100">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                   </span>
                </button>

              </div>

              <div class="space-y-1 h-1/5 pl-3">
                 <h4 class="text-lg">{{productTitle.slice(0,25)}}...</h4>
                 <p class="text-xl font-extrabold text-gray-900"><span class="pr-[0.75px]">&#2547;</span>{{Math.floor(productPrice)*92}}</p>
              </div>
              
          </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';


export default {
    name:"Product",
    props:{
        productsDetails:{
            type:Object,
            required:true
        }
    },
    
    setup(props){
      const store =useStore();
      const productTitle =ref(props.productsDetails.title);
      const productPrice =ref(props.productsDetails.price);
      const productThumbnail =ref(props.productsDetails.image);
      const productId=ref(props.productsDetails.id);
     

      function addTocart(cartIteamId){
        store.
        dispatch(`cart/retrivePurchasedItems`,
        cartIteamId);
      };
       function addToWishList(wishItemId){
        store.
        dispatch(`cart/retriveWishedItems`,
        wishItemId);
      };
      
        return {
            productTitle,
            productPrice,
            productThumbnail,
            productId,
            addTocart,
            addToWishList
        }
    }

}
</script>

