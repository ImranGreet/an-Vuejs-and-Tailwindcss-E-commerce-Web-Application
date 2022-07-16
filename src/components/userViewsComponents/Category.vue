  <template>
    <section class="bg-slate-50">
      <headingAndtext>
         <template #heading>
            <h1>Category</h1>
         </template>
         <template #text>
            <p> browse products by</p>
         </template>
    </headingAndtext>

    <div class="w-11/12 mx-auto my-20 lg:my-0 
         lg:h-[650px] flex flex-col 
         lg:flex-row justify-between 
         lg:justify-center items-center
         space-y-12 lg:space-y-0">

       <div class="flex flex-col lg:flex-row 
       w-72  lg:w-[400px] h-48 lg:h-96  
       lg:even:grow shadow-sm"
          v-for="catFirst in categoriesFirstToShow" :key="catFirst.id">
          <router-link 
          :to="{name:`category`,params:{category:catFirst.category}}" 
          class=" text-center w-full h-full">
            <img :src="catFirst.image" :alt="catFirst.title" class="w-full h-full">
            <h2 class="uppercase font-works-sans text-2xl tracking-wider">
               {{catFirst.category}}
            </h2>
          </router-link>
       </div>

      <div class="flex flex-col
       space-y-8 justify-center w-72 
       lg:w-[400px] h-96 shadow-sm">
          <router-link 
          :to="{name:`category`,params:{category:catLast.category}}" 
          v-for="catLast in categoriesLastToShow" :key="catLast.id" 
          class="w-full h-1/2 text-center ">
          <img :src="catLast.image" :alt="catLast.title" class="w-full h-full">
           <h2 class=" uppercase font-works-sans text-2xl tracking-wider">
            {{catLast.category}}
            </h2>
       </router-link>
      </div>

    </div>

    </section>
  </template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
   name:"Category",
   
  setup(){
    const store =useStore();
    const products = computed(()=>store.state.products.allProducts);
    const categories = computed(()=>store.state.products.categories);
    const categoryThumbnail = ref([]);
    const categoriesFirstToShow =ref([]);
    const categoriesLastToShow =ref([]);
   
    
    for(let i=0;i<categories.value.length;i++)
    {
       products.value.find((item)=>item.category===categories.value[i]?
       categoryThumbnail.value.push(item):null);
    }

    onMounted(()=>{
       categoriesFirstToShow.value=categoryThumbnail.value.slice(0,2);
       categoriesLastToShow.value=categoryThumbnail.value.slice(2,4);
      
    });
    
    return {
      products,
      categories,
      categoryThumbnail,
      categoriesFirstToShow,
      categoriesLastToShow
     }
  }
}
</script>



