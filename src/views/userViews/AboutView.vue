<template>
  <section class="w-full bg-gray-100/25 my-24">
      <div class="w-full lg:w-4/5 mx-auto flex flex-col justify-evenly items-start lg:items-center space-y-16">
       
       <div class="w-full lg:w-2/5 lg:h-64  flex flex-col justify-center items-center  mx-auto text-center tracking-wide leading-relaxed space-y-4">
          <h1 class="text-5xl text-gray-800">About Xenmesh</h1>
          <p class="text-center uppercase">makes you can present yourself better with our style expert picked cloting.</p>
        </div>

        <div class="w-full flex flex-col lg:flex-row justify-between items-center">
           <div class="w-full lg:w-1/2">
             <img src="https://demo.joomshaper.com/2017/shopin/images/2017/05/26/about-image.jpg" alt="meeting" class="w-full aspect-video">
           </div>

           <div class="w-full lg:w-1/2 px-3 lg:px-8 space-y-28">
             <div class="space-y-3">
               <h1 class="text-4xl">Background</h1>
               <p class="text-md leading-relaxed tracking-wide text-justify">{{background.text}}</p>
             </div>

             <div class="space-y-3">
               <h1 class="text-4xl">Mission</h1>
               <p class="text-md leading-relaxed tracking-wide text-justify">{{background.text}}</p>
             </div>

           </div>

        </div>
        <ServicesView/>
        <Partners/>
      </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import ServicesView from './ServicesView.vue';
import Partners from './Partners.vue';

export default {
  name:"About",
  components:{
    ServicesView,
    Partners
},
  setup(){
    const background= ref({
     text: "The first manufacturing facility, FeShop Fashion House, was established in 1995 with the name of eShopper, we come to market as FeShop on 2003 & become most popular fashion house.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
     image:"https://demo.joomshaper.com/2017/shopin/images/2017/05/26/about-image.jpg"
      })
    return {
      background
    }
  }

}
</script>

