<template>
    <section class="w-full lg:w-cart-width bg-slate-50 
    lg:h-52 flex justify-around items-center 
    my-20 px-4 rounded-md shadow-xl border  
    shadow-pink-200/30 relative">

       <div class="w-1/3 h-1/2">
        <img :src="productThumbnail" :alt="productTitle"
         class="w-full h-full object-center shadow-sm rounded-md">
       </div>

       <div class="w-1/2 px-2 font-works-sans">
        <h1 class="text-md text-gray-500 tracking-wide leading-relaxed">{{productTitle}}</h1>
        <p class="text-2xl font-medium font-libre-franklin"> 
          <span>&#2547;</span> 
        {{Math.floor(productPrice*92)}}
        </p>
       </div>

      <div class="w-36 text-center space-y-1">
         <p class="text-sm tracking-wider 
          hover:no-underline underline underline-offset-2 
         text-sky-800 decoration-red-600">
         Quantity
         </p>

        <div class="space-x-1">
            <input type="number" value="1"
            class="px-2 py-1 rounded-lg border
            border-gray-600 w-12 caret-pink-600 
            focus:caret-pink-700 focus:outline-none">

           <button v-if="cartButton" 
              class="px-2 py-1 rounded-lg border
              border-gray-600 w-12  
              caret-pink-600 
              focus:caret-pink-700
              lg:hover:bg-slate-800
              lg:hover:text-white 
                duration-100 delay-150
                focus:outline-none">
                <span><font-awesome-icon icon="fa-solid fa-cart-plus" /></span>
            </button>
         </div>
      </div>

       <button @click="trashIteam(productId)" 
        class="w-8 absolute top-6 right-4
        hover:text-red-600 rounded-md">
        <span class="text-lg shadow-xl">
          <font-awesome-icon icon="fa-solid fa-xmark"/>
        </span>
       </button>
    </section>

</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import OrderSummary from '../userViewsComponents/OrderSummary.vue';
export default {
  name:"ReusableCart",
  components:{
    OrderSummary
  },
  props:{
    productInfo:{
      type:Object,
      required:true
    }
  },
  setup(props) {
      const route =useRoute();
      const productTitle =ref(props.productInfo.title);
      const productPrice =ref(props.productInfo.price);
      const productThumbnail =ref(props.productInfo.image);
      const productId=ref(props.productInfo.id);
      const cartButton =ref(false);

      onMounted(()=>{
        route.name==="wish"?cartButton.value=true:false;
      });

      function trashIteam(itemId){
        console.log(itemId)
      }
      
      return{
        productTitle,
        productPrice,
        productThumbnail,
        productId,
        cartButton,
        trashIteam

      }
  },
}
</script>

