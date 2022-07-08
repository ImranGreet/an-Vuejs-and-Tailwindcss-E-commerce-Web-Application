<template>
  <section class="w-96 h-32 flex justify-center items-center">
      <button name="prev"><slot></slot></button>
      <button name="next"><slot></slot></button>
  </section>
</template>

<script>
export default {
    name:"paginateToElements",
    setup(){
        return {

        }
    }


}
</script>

