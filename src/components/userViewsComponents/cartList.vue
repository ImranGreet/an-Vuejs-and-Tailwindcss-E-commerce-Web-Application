
<template>
    <p class="my-20" v-for="cart in cartLists" :key="cart.id">{{cart}}</p>
    
</template>

<script>
import { ref ,computed, onMounted} from 'vue'

import { useStore } from 'vuex'

export default {
    name: "cartlist",
    
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

