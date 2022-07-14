

import products from './products';

const state ={
    cartIteams:[],
    wishIteams:[],
    
};

const getters ={
  numberOfIteams(state){
    return state.cartIteamsToBeShow.length;
  }
};

const mutations = {
  
 ADD_TO_CART(state,payload)
 {
    state.cartIteams.push(payload);
 },
 
 ADD_TO_WISHLIST(state,payload)
 {
   state.wishIteams.push(payload);
 }
};

const actions = {
     retrivePurchasedItems({commit},payload)
    {
      const availabelIteams =  products.state.allProducts;
      const cartedItem = availabelIteams.filter(item => item.id === payload);
      commit('ADD_TO_CART',cartedItem);
    },

     retriveWishedItems({commit},payload)
    {
      const availabelIteams =  products.state.allProducts;
      const wishedItem = availabelIteams.filter(item => item.id === payload);
      commit('ADD_TO_WISHLIST',wishedItem);
    },
};

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}