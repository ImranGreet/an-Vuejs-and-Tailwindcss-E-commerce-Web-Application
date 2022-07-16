import axios from 'axios'

const state ={
    sortedProducts:[],
    allProducts:[],
    categories:[],
    singleProductDetails:0,
    productByCategory:[],
    limitProducts:[],
    
};

const getters ={};

const mutations = {
    GET_SORTED_PRODUCTS(state,payload)
    {
        state.sortedProducts = payload;
    },

    GET_ALL_PRODUCTS(state,payload){
        state.allProducts = payload;
    },

    GET_CATEGORIES(state,payload){
        state.categories = payload;
    },
    GET_PRODUCTSBY_CATEGORY(state,payload){ 
        state.productByCategory = payload;
    },

    GET_SINGLE_PRODUCT_BY_ID(state,payload){
        state.singleProductDetails = payload;
        
    },
    GET_PRODUCTS_INLIMIT(state,payload){
        state.limitProducts = payload;
        console.log(state.limitProducts);
    }
    
   
};

const actions = {
    async retrieveSortedProducts({commit})
    {
         const response =await axios.get('https://fakestoreapi.com/products?sort=asc');
         commit('GET_SORTED_PRODUCTS',response.data);
    },
    async retrieveAllProducts({commit},payload){
        const products =await axios.get(`https://fakestoreapi.com/products`);
        commit('GET_ALL_PRODUCTS',products.data);
    },
    async retrieveCategories({commit}){
       await axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{commit("GET_CATEGORIES",response.data)});
        
    },
    async retrieveSingleProductById({commit},payload){
        await axios.get(`https://fakestoreapi.com/products/${payload}`)
        .then(response=>{commit("GET_SINGLE_PRODUCT_BY_ID",response.data)});
    },
    async retrieveProductsByCategory({commit},payload){
        await axios.get(`https://fakestoreapi.com/products/category/${payload}`).
        then(response=>{commit("GET_PRODUCTSBY_CATEGORY",response.data)});
    },
    async retrieveProductsByLimit({commit},payload){
        await axios.get(`https://fakestoreapi.com/products?limit=${payload}`).
        then(response=>{commit("GET_PRODUCTS_INLIMIT",response.data)});
    },
  
};

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}