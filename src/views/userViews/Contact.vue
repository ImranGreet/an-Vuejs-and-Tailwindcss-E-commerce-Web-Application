<template>
  <section class="w-full h-fit my-24 font-works-sans">
       <div class="w-full lg:w-4/5  mx-auto 
       space-y-4 border-[0.75px] lg:rounded-lg p-8 lg:shadow-sm lg:shadow-blue-200">

         <div class="text-center  space-y-3">
           <h1 class="text-2xl lg:text-5xl text-stone-800">Contact Us</h1>
           <p class="text-stone-600 tracking-widest text-xl">let us know if we can  help</p>
         </div>

         <form action="#" class="w-full space-y-6">

            <div class="w-full mx-auto flex flex-col lg:flex-row justify-between 
            items-center space-y-4 lg:space-y-0 lg:space-x-8">

                <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="name" class="sr-only">name</label>
                    <input type="text" name=""  
                    placeholder="Your name" autofocus
                    class="w-full px-4 border py-2.5 
                    focus:outline-none 
                    placeholder:text-gray-900">
                    
                </div>

                 <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="email" class="sr-only">email</label>
                    <input type="email" name=""  
                    placeholder="Email" 
                    class="w-full px-4 border py-2.5 
                    focus:outline-none 
                    placeholder:text-gray-900">
                </div>

            </div>

           <div class="w-full">
            <textarea name=""  
            cols="30" rows="10" 
            placeholder="Message" 
            class="w-full border focus:outline-none resize-none 
            px-6 pt-5 placeholder:text-gray-900"/>
           </div>

           <button class="w-48 mx-auto bg-gray-800 
           lg:hover:bg-stone-800 px-5 py-2.5 
           text-white tracking-wide">
           Send Message
           </button>

         </form>

       </div>
  </section>
</template>

<script>


export default {
    name: "Contact",
    setup() {
      function ClickOnce(){
        const btn =document.getElementById('btn');
        btn.classList.add('bg-red-900');
      }
        return {
          ClickOnce
        };
    },

}
</script>

