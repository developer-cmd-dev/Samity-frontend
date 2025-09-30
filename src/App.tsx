
import './App.css'
import {ThemeProvider} from "./components/theme-provider.tsx";
import HomePage from "@/page/homePage.tsx";
import {useEffect, useState} from "react";
import axios from "axios"
import {toast, Toaster} from "sonner";
import {useContentStore} from "@/store.ts";

export interface ContributorsData{
    name:string;
    invoiceNo:number;
    amount:number;
    isPaid:boolean;
    _id:string;
}



function App() {
    const [contributorsData, setContributorsData] = useState<ContributorsData[]>([]);

    useEffect(():void => {
        (async ()=>{
       try {
           const response = await axios.get("http://localhost:3000/");
           setContributorsData(response.data.data);
       }catch (e){
           const error = e as Error;
           console.error(error.message);
       }
        })()
    }, []);





     function setSearch(search:ContributorsData[]){
         setContributorsData(search);
     }





  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster position={"top-right"} />
          <HomePage setSearch={setSearch} contributorData={contributorsData} />

      </ThemeProvider>
  )
}

export default App
