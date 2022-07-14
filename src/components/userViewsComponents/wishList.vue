


<script>
import { ref ,computed, onMounted} from 'vue'
import PaginationButton from '@/utility/paginationButton.vue'
import { useStore } from 'vuex'

export default {
    name: "wishList",
     components: { PaginationButton },
    setup() {
        const store =useStore();
        const productsToShow =ref(3);
        const wishedProducts = computed(()=>store.state.cart.wishIteams
        .flat().slice(0,productsToShow.value));
        const checked =ref(false);

        function loadMore(){
            productsToShow.value +=3;
        }

        function checkTrue(){
         checked.value=!checked.value
        }
        
        return {
            wishedProducts,
            productsToShow,
            checked,
            checkTrue,
            loadMore
            
        };
    },
   
}
</script>

