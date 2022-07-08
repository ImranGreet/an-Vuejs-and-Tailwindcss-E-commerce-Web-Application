<template>
  <section class="w-full  flex flex-col
   justify-center items-center lg:space-y-8">

     <div class="w-full text-center">
        <h4 class="uppercase text-gray-800/80 tracking-widest">
            experience a great shopping
        </h4>
        <h1 class="capitalize text-3xl lg:text-6xl font-lato font-semibold">
            Good service & best price
        </h1>
     </div>

     <div class="flex flex-col 
     lg:flex-row justify-between 
     items-center lg:space-x-4">

        <div class="w-full lg:w-1/3 space-y-3 
        border shadow-sm p-8 
        lg:hover:bg-gray-800 
        lg:hover:text-white 
        duration-100 delay-150">
            <h1 class="text-4xl">
                <span><font-awesome-icon icon="fa-solid fa-truck"/></span>
            </h1>
            <h3 class="uppercase tracking-wide text-2xl">
                Free shopping
            </h3>
            <p class=" leading-relaxed text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fugiat sed, accusamus vero fugit velit dolores dolorum rem.
            </p>
        </div>

        <div class="w-full lg:w-1/3 space-y-3 border shadow-sm p-8 lg:hover:bg-gray-800 lg:hover:text-white duration-100 delay-150">
            <h1 class="text-4xl">
                <span>
                    <font-awesome-icon icon="fa-solid fa-clock-rotate-left"/>
                </span>
            </h1>
            <h3 class="uppercase tracking-wide text-2xl">
                2 days delivery
            </h3>
            <p class=" leading-relaxed text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fugiat sed, accusamus vero fugit velit dolores dolorum rem.</p>
        </div>

        <div class="w-full lg:w-1/3 space-y-3 border shadow-sm p-8 lg:hover:bg-gray-800 lg:hover:text-white duration-100 delay-150">
            <h1 class="text-4xl">
                <span><font-awesome-icon icon="fa-solid fa-money-check-dollar"/></span>
            </h1>
            <h3 class="uppercase tracking-wide text-2xl">Moneyback gurantee</h3>
            <p class=" leading-relaxed text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fugiat sed, accusamus vero fugit velit dolores dolorum rem.</p>
        </div>

     </div>

  </section>
</template>

<script>
export default {
    name:"ServicesView",
    setup(){
        return {

        }
    }

}
</script>

