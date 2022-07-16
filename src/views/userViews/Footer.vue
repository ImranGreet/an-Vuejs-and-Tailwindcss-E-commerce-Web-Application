<template>
  <section class="w-full h-auto lg:h-96 bg-gray-800 font-works-sans">
    <div class="w-full lg:w-4/5 mx-auto h-full 
    flex flex-col justify-evenly 
    space-y-3 lg:space-y-0 ">

      <div class="w-full flex flex-col lg:flex-row 
      justify-between items-center 
      space-y-3 lg:space-y-0">

          <div class="w-full lg:w-1/4 text-gray-200/70 space-y-4">
            <h1 class="text-4xl capitalize">xenmesh</h1>
            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <div class="flex justify-start space-x-3">
               <a href="#"><span class="inline-block"><font-awesome-icon icon="fa-brands fa-facebook" /></span></a>
               <a href="#"><span class="inline-block"><font-awesome-icon icon="fa-brands fa-twitter" /></span></a>
               <a href="#"><span class="inline-block"><font-awesome-icon icon="fa-brands fa-youtube" /></span></a>
               <a href="#"><span class="inline-block"><font-awesome-icon icon="fa-brands fa-pinterest" /></span></a>
            </div>

          </div>

          <div class="w-full lg:w-1/4  space-y-4">
            <h1 class="text-md uppercase text-gray-600 font-lato">About</h1>
            
            <div class="flex flex-col justify-start space-y-3">
               <router-link to="#" class="text-md text-gray-200/70 capitalize" v-for="about in aboutLinks" :key="about">{{about}}</router-link>
            </div>

          </div>

           <div class="w-full lg:w-1/4  space-y-4">
            <h1 class="text-md uppercase text-gray-600 font-lato">Company</h1>
            
            <div class="flex flex-col justify-start space-y-3">
               <router-link :to="{name:`contact`}" class="text-md text-gray-200/70 capitalize" v-for="company in companyLinks" :key="company">{{company}}</router-link>
            </div>

          </div>

           <div class="w-full lg:w-1/4  space-y-4">
            <h1 class="text-md uppercase text-gray-600 font-lato">subscribe our newsletter</h1>
            <p class="text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ab explicabo soluta maxime praesentium, quibusdam libero.</p>
            <form action="#" class="w-full flex  justify-start space-x-1">
               <input type="email" name="" id="" 
               placeholder="E-mail"
               class="px-4 py-1.5 
               focus:outline-none border 
               bg-inherit text-white 
               placeholder:text-sm 
               placeholder:tracking-wider 
               placeholder:font-lato">
              <button type="submit" 
               class="px-4 py-1.5 border-2 
               text-white uppercase">
               Subscribe
               </button>
            </form>

          </div>

      </div>
       
       <div class="w-full flex justify-between">
         <p class="text-sm tracking-wide 
         text-gray-400/75 capitalize"> 
            <span>&copy;</span> {{currentYear}} all Rights reserved
         </p>

         <router-link to="#" class="w-1/2">
            <img src="https://demo.joomshaper.com/2017/shopin/images/2017/05/15/footer-payment-card-img.png" alt="" class="w-1/2">
         </router-link>
         
       </div>

    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Footer",
    
    setup(){
        const aboutLinks = ref(["About Us","Business with us","delivery information","terms and conditions"]);
        const companyLinks = ref(["contact us","track order","F.A.Q","privacy policy"]);

        const year = new Date();
        const currentYear = year.getFullYear();
        
       
        return {
         aboutLinks,companyLinks,currentYear
        }
    }

}
</script>

