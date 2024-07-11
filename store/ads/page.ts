import { create } from "zustand";
import http from "../../api/interseptor";
import { ADS_request } from "@/interfaces/ads";

const ADSStore = create <ADS_request> ((set) => ({
    banner: [],
    getBanner: async () => {
        const response = await http.get('/ads')
        set({ banner: response?.data?.data });
    }
}));




export default ADSStore;