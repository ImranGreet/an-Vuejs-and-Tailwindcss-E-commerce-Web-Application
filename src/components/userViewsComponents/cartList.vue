
<template>
  <section class="flex flex-col-reverse 
    lg:flex-row justify-between w-full 
    lg:w-11/12 mx-auto my-20 lg:space-x-3">

    <div class="flex flex-col justify-center
     items-center space-y-2">
        <h2 v-if="cartLists.length>0" 
        class="text-lg lg:text-xl font-medium font-libre-franklin 
        uppercase tracking-wider">
        Iteams you have been carted to purchase
        </h2>
        <ReusableCart v-for="cart in cartLists" 
         :key="cart.id" :productInfo="cart" class="odd:bg-gray-300/50">
       </ReusableCart>
       <button  @click="loadMore()" 
        class="w-full px-3 py-1.5 bg-indigo-700 
        text-white hover:bg-indigo-600 
        tracking-wider font-libre-franklin uppercase">
        Load more
       </button>
    </div>

    <OrderSummary v-if="cartLists.length>0" 
        class="lg:shadow-md lg:shadow-pink-300 ">
        <template #subtotal>$600.00</template>
        <template #ship>$600.00</template>
        <template #tax>$50.00</template>
        <template #total>$500.00</template>
        <template #button>checkout</template>
    </OrderSummary>

  </section>

</template>

<script>
import { ref ,computed, onMounted} from 'vue'

import { useStore } from 'vuex'
import ReusableCart from '../ReusableComponents/ReuseCartIteam.vue';
import OrderSummary from './OrderSummary.vue';
export default {
    name: "cartList",
    components: {
    ReusableCart,
    OrderSummary
},
    
    setup() {
        const store =useStore();
        const productsToShow =ref(3);
        const cartLists = computed(()=>store.state.cart.cartIteams
        .flat().slice(0,productsToShow.value));
        const checked =ref(false);

        function loadMore(){
            productsToShow.value +=3;
        }

        function checkTrue(){
         checked.value=!checked.value
        }
     
        
        return {
            cartLists,
            productsToShow,
            checked,
            checkTrue,
            loadMore
            
        };
    },
   
}
</script>

<ReusableCart v-for="cart in cartLists" :key="cart.id" :productInfo="cart"></ReusableCart>