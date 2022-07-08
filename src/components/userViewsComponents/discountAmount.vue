<template>
  <section class="w-full h-96 
  bg-gray-200/50 mt-6 
  flex flex-col justify-center 
  items-center space-y-8">

     <div class="text-center">
        <p class="text-gray-600/70 
            tracking-widest 
            text-2xl font-works-sans">
            summer sales
        </p>
        <h1 class="text-gray-600 capitalize 
            text-2xl lg:text-4xl tracking-wide font-lato">
            get upto 68% discount
        </h1>
    </div>

     <router-link :to="{name:'products'}" 
        class="bg-gray-900 hover:bg-gray-900/80 
        text-white tracking-wide lg:tracking-[0.2em] uppercase px-4 lg:px-6 py-2.5">
        <span class="inline-block pr-2 lg:pr-4">
            <font-awesome-icon icon="fa-solid fa-plus"/>
        </span>Browse iteams
     </router-link>
      
  </section>
</template>

<script>
export default {
    name:"discountAmount",
    setup(){
        return {

        }
    }

}
</script>

