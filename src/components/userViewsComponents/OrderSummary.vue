<template>
  <section class="w-full lg:w-cart-width h-auto lg:h-96
  font-works-sans space-y-4 bg-gray-100/25 
  px-8 py-3 divide-y divide-solid border
   border-emerald-600/10 rounded-lg ">

   <div class="h-10 flex justify-between items-center">
    <h2 class="tracking-wide font-medium">Subtotal :</h2>
    <p>
      <span>&#2547; </span>
      <slot name="subtotal"></slot>
    </p>
   </div>

   <div class="h-10 flex justify-between items-center">
    <h2 class="tracking-wide font-medium">Shipping Estimate :</h2>
    <p>
        <span>&#2547; </span>
        <slot name="ship"></slot>
    </p>
   </div>

   <div class="h-10 flex justify-between items-center">
    <h2 class="tracking-wide font-medium">Tax Estimate :</h2>
    <p>
        <span>&#2547; </span>
        <slot name="tax"></slot>
    </p>
   </div>

   <div class="h-10 flex justify-between items-center">
    <h2 class="tracking-wide font-medium">Order Total :</h2>
    <p>
        <span>&#2547; </span>
        <slot name="total"></slot>
    </p>
   </div>

   <button class="w-full bg-indigo-700 
   lg:hover:bg-indigo-800 text-xl 
   capitalize tracking-wider px-2 py-1.5
    text-white rounded-md shadow-md shadow-pink-200">
    <slot name="button"></slot>
   </button>

  <div class="space-y-3 text-center">
    <span class="block">OR</span>
     <router-link to="/" class="text-center mt-16 underline
      underline-offset-2 
      decoration-sky-500 capitalize lg:hover:no-underline">
      continue to shopping
    </router-link>
  </div>

  </section>
</template>

<script>
export default {
    name:"OrderSummary",

}
</script>

