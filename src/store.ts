import {create} from "zustand"
import axios from "axios";

type ContentState = {
    loading: boolean;
    data: any | null;
    error: string | null;
    searchData:any|null;
    addContent: (payload: any) => Promise<void>;
    searchContent:(payload: string) => Promise<void>;
};


export const useContentStore = create<ContentState>((set) => ({
    loading: false,
    data: null,
    searchData:null,
    error: null,

    addContent: async (payload) => {
        set({ loading: true, error: null });

        try {
            const response = await axios.post("http://localhost:3000/add-content", payload);
            set({ data: response.data, loading: false });
        } catch (e) {
            if (axios.isAxiosError(e)) {
                set({ error: e.response?.data?.message || e.message, loading: false });
            } else {
                set({ error: (e as Error).message, loading: false });
            }
        }
    },
    searchContent:async(queryData:string):Promise<void>=>{
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`http://localhost:3000/search/?q=${queryData}`);
            set({ searchData: response.data, loading: false });
        } catch (e) {
            if (axios.isAxiosError(e)) {
                set({ error: e.response?.data?.message || e.message, loading: false });
            } else {
                set({ error: (e as Error).message, loading: false });
            }
        }

    }

}));