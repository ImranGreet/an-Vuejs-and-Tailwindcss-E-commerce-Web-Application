<template>
  <section class="w-full h-fit space-y-10">

       <div class="text-center space-y-2">
         <p class="text-lg text-gray-700 uppercase font-lato tracking-widest font-normal">companies in our support</p>
         <h1 class="text-5xl capitalize">our partners</h1>
       </div>

       <div class="w-full flex justify-between items-center flex-wrap">
        <router-link to="#" class="w-24 h-24" v-for="partner in partners" :key="partner">
            <img :src="partner" alt="" class="w-full h-1/2">
        </router-link>
       </div>

  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Partners",
    setup(){
        const partners = ref([
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-01.png",
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-02.png",
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-03.png",
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-04.png",
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-05.png",
            "https://demo.joomshaper.com/2017/shopin/images/2017/06/01/client-06.png"
        ])
        return {
          partners
        }
    }

}
</script>

