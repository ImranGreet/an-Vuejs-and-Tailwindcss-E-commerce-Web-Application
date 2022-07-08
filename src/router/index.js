import { createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

const routes = [

  {
    path: '/',
    component:()=>import('@/layouts/userView.vue'),
    async beforeEnter(to,from,next){
       await store.dispatch('products/retrieveCategories');
       await store.dispatch('products/retrieveAllProducts');
       await store.dispatch("products/retrieveSortedProducts");
      next();
    },
    children:[
      {
        path:'',
        name:'home',
        component:()=>import('@/views/userViews/HomeView.vue'),
      },
      {
        path:'/products',
        name:'products',
        component:()=>import('@/components/userViewsComponents/productView.vue'),
        beforeEnter(to,from,next){
          store.dispatch('products/retrieveCategories');
           store.dispatch('products/retrieveAllProducts');
          next();
        }
      },
      {
        path:'/products/:category',
        name:'category',
        component:()=>import('@/components/ReusableComponents/productShowByCategory.vue'),
       async beforeEnter(to,from,next){
         await store.dispatch('products/retrieveCategories');
         await store.dispatch('products/retrieveProductsByCategory',to.params.category);
          next();
        },
       },
      {
        path:'/productdetails/:id',
        name:'productDetails',
        component:
        ()=>import('@/components/ReusableComponents/productDetails.vue'),
        beforeEnter(to,from,next){
         store.dispatch(`products/retrieveSingleProductById`,to.params.id);
         next();
        }
      }, 
      {
        path:'/products/wishlist',
        name:'wish',
        component:()=>import('@/components/userViewsComponents/wishList.vue'),
      },
      {
        path:'/products/cartiteams',
        name:'cart',
        component:()=>import('@/components/userViewsComponents/cartList.vue'),
      },
      {
        path:'/registration',
        name:'registration',
        component:()=>import('@/views/userViews/Registration.vue'),
      },
      {
        path:'/login',
        name:'login',
        component:()=>import('@/views/userViews/Login.vue')
      },
      {
        path:'/contact',
        name:'contact',
        component:()=>import('@/views/userViews/Contact.vue')
      },
      {
        path:'/about',
        name:'about',
        component:()=>import('@/views/userViews/AboutView.vue')
      }
    ],
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
