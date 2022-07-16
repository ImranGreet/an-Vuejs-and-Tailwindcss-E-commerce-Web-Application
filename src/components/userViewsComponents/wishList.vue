
<template>
    <section class="w-full">
         <ReusableCart v-for="wish in wishedProducts" 
         :key="wish.id" :productInfo="wish">
         
     </ReusableCart>

     <button  @click="loadMore()" 
        class="w-full lg:w-cart-width px-3 py-1.5
        bg-indigo-700 text-white hover:bg-indigo-600 
        tracking-wider font-libre-franklin uppercase">
        Load more
      </button>
      
    </section>
</template>

<script>
import { ref ,computed, onMounted} from 'vue'
import PaginationButton from '@/utility/paginationButton.vue'
import ReusableCart from "@/components/ReusableComponents/ReuseCartIteam.vue";
import { useStore } from 'vuex'

export default {
    name: "wishList",
     components: { PaginationButton,ReusableCart },
    setup() {
        const store =useStore();
        const productsToShow =ref(3);
        const wishedProducts = computed(()=>store.state.cart.wishIteams
        .flat().slice(0,productsToShow.value));
        const checked =ref(false);

        function loadMore(){
            productsToShow.value +=3;
        }

        return {
            wishedProducts,
            productsToShow,
            checked,
            loadMore
            
        };
    },
   
}
</script>

