<template>
  <section class="space-y-8 mt-6">
    <Slider/>
    <Category/>
    <sortProducts/>
    <DiscountAmount/>
    <Feature/>
  </section>
</template>

<script>
import Slider from '@/components/userViewsComponents/Slider.vue';
import Category from '@/components/userViewsComponents/Category.vue';
import sortProducts from '@/components/userViewsComponents/sortProducts.vue';
import DiscountAmount from '@/components/userViewsComponents/discountAmount.vue';
import Feature from './Feature.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Slider,
    Category,
    sortProducts,
    DiscountAmount,
    Feature
   },
   
}
</script>
