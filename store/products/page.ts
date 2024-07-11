import { create } from "zustand";
import http from "../../api/interseptor";
import { request_products } from "@/interfaces/products";

const useProductStore = create <request_products> ((set) => ({
    products: [],
    popular_products: [],
    getProducts: async () => {
        try{
            const response = await http.get("/products/search");
            set({ products: response?.data?.data?.products});
        }catch(err){
            console.log(err);
        }
    },
    getProductsId: async ({id}) => {
        try{
            const response = await http.get(`/products/${id}`);
            return response
        }catch(err){
            console.log(err);
        }
    },
    getPopularProducts: async () => {
        try{
            const response = await http.get("/products/popular");
            set({ popular_products: response?.data?.data?.products});
        }catch(err){
            console.log(err);
        }
    }
}));




export default useProductStore;