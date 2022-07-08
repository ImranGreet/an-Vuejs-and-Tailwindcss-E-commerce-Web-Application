<template>
  <section class="w-full h-[700px] flex flex-col justify-center items-center">
      <div class="w-full lg:w-3/5 mx-auto space-y-7 ">

        <div class=" mx-auto text-center space-y-3">
            <h1 class="text-2xl lg:text-6xl tracking-wide 
            capitalize font-lato font-bold">
            Login Your Account
            </h1>
            <p class="uppercase tracking-widest">sign in</p>
        </div>

        <form action="#" 
        class="w-full lg:w-3/4 mx-auto  flex flex-col justify-center 
        items-center space-y-4 
        border-y lg:border lg:border-gray-800/40 lg:rounded-lg 
        lg:bg-sky-800/75 p-8 
        lg:shadow-lg lg:shadow-blue-800/30">

             <div class="w-full  flex flex-col">
                    <label for="firstname" class="sr-only">username</label>
                    <input type="text" name=""  
                    placeholder="username" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

            <div class="w-full  flex flex-col">
                    <label for="fpassword" class="sr-only">password</label>
                    <input type="password" name=""  
                    placeholder="password" 
                    class="w-full px-4 border py-2.5 focus:outline-none">
            </div>

            <button class="w-full px-4 py-2.5 
            bg-blue-600 lg:hover:bg-blue-800 
            text-white duration-75 delay-100 
            border text-xl">Login</button>

             <div class="w-full  flex flex-col">
                <router-link to="#" 
                class="underline underline-offset-4">
                Forgot your password
                </router-link>  
                <router-link to="#" 
                class="underline underline-offset-4">
                Forgot username
                </router-link> 
            </div>

            <div class="w-full  flex flex-col">
                   <p>Don't have a account 
                    <span class="inline-block">
                    <router-link :to="{name:`registration`}" class="underline underline-offset-4">
                    Create an account
                    </router-link></span></p>    
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

