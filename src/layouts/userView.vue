<template>

    <section>
      <NavigationsPath class="fixed w-full top-0  bg-white"></NavigationsPath>
      <router-view/>
      <Footer nav="navigationsWays"/>
    </section>

</template>

<script>
import NavigationsPath from '@/components/userViewsComponents/NavigationsPath.vue';
import Footer from '@/views/userViews/Footer.vue';

export default {
    name:"userView",
    
    components:{
      NavigationsPath,
      Footer
    },
    
}
</script>

