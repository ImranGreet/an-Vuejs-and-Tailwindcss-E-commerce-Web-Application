<template>
  <section class="w-full h-fit flex flex-col justify-center items-center my-24">
      <div class="w-full lg:w-4/5 mx-auto space-y-7">

        <div class=" mx-auto text-center space-y-3">
            <h1 class="text-2xl lg:text-6xl tracking-wide capitalize font-lato font-bold">
                create an account
            </h1>
            <p class="uppercase tracking-widest">sign up</p>
        </div>

        <form action="#" 
        class="w-full lg:w-3/4 mx-auto  flex flex-col 
        justify-center items-center space-y-4 
        lg:border lg:border-gray-800/40
        lg:rounded-lg bg-stone-300 
      lg:bg-sky-800/75 p-8 
        lg:shadow-md lg:shadow-red-600/20">

            <div class="w-full flex flex-col 
            lg:flex-row justify-between items-center 
            lg:space-x-8 space-y-4 lg:space-y-0">

                <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="firstname" class="sr-only">Firstname</label>
                    <input type="text" name="" 
                     placeholder="Firstname" 
                     class="w-full px-4 border py-2.5 focus:outline-none">
                    
                </div>

                 <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="lastname" class="sr-only">lastname</label>
                    <input type="text" name=""  
                    placeholder="lastname" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                </div>

            </div>

            <div class="w-full  flex flex-col">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name=""  
                    placeholder="email" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

             <div class="w-full  flex flex-col">
                    <label for="firstname" class="sr-only">username</label>
                    <input type="text" name=""  
                    placeholder="username" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

              <div class="w-full  flex flex-col">
                    <label for="password" class="sr-only">password</label>
                    <input type="password" name=""  
                    placeholder="password" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

               <div class="w-full flex flex-col 
               lg:flex-row  justify-between 
               items-center space-y-4 
               lg:space-y-0 lg:space-x-8">

                <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="city" class="sr-only">city</label>
                    <input type="text" name=""  
                    placeholder="city" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                    
                </div>

                 <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="street" class="sr-only">street</label>
                    <input type="text" name=""  
                    placeholder="street" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                </div>

            </div>

               <div class="w-full flex flex-col lg:flex-row 
               justify-between items-center 
               space-y-4 lg:space-y-0 lg:space-x-8">

                <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="street number" class="sr-only">street number</label>
                    <input type="text" name=""  
                    placeholder="street number" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                    
                </div>

                 <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="zipcode" class="sr-only">zipcode</label>
                    <input type="text" name=""  
                    placeholder="zipcode" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                </div>

            </div>

               <div class="w-full flex flex-col lg:flex-row 
               justify-between items-center space-y-4 
               lg:space-y-0 lg:space-x-8">

                <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="latitude" class="sr-only">latitude</label>
                    <input type="text" name=""  
                    placeholder="latitude" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                    
                </div>

                 <div class="w-full lg:w-1/2 flex flex-col">
                    <label for="longitude" class="sr-only">longitude</label>
                    <input type="text" name=""  
                    placeholder="longitude" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
                </div>

            </div>

              <div class="w-full  flex flex-col">
                    <label for="phonenumber" class="sr-only">phonenumber</label>
                    <input type="text" name=""  
                    placeholder="phonenumber" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

              <div class="w-full  flex flex-col">
                    <button type="submit" 
                      class="w-full px-4 border py-2.5 
                      focus:outline-none bg-blue-600 
                      lg:hover:bg-blue-800 
                      duration-75 delay-100 
                      text-white text-xl ">
                      Submit
                    </button>
            </div>


            

            <div class="w-full  flex flex-col">
                <p>Already have an account 
                    <span class="inline-block">
                        <router-link :to="{name:`login`}" 
                        class="underline underline-offset-4">
                        Login your account
                        </router-link>
                    </span>
                </p>    
            </div>


        </form>

      </div>

  </section>
</template>

<script>
export default {
    name:"Registration",
    setup(){
        return {

        }
    }

}
</script>

