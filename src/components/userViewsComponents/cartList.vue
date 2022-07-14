


<script>
import { ref ,computed, onMounted} from 'vue'

import { useStore } from 'vuex'

export default {
    name: "cartList",
    
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

