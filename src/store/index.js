import { createStore } from 'vuex';
import products from './modules/user/products';
import cart from './modules/user/cart';
import auth from './modules/user/auth';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart,
    auth
  }
})
