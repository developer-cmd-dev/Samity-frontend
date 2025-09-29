
import './App.css'
import {ThemeProvider} from "./components/theme-provider.tsx";
import HomePage from "@/page/homePage.tsx";
import {useEffect, useState} from "react";
import axios from "axios"
import {toast, Toaster} from "sonner";

export interface ContributorsData{
    name:string;
    raseedNo:number;
    amount:number;
    isPaid:boolean;
    _id:string;
}

type Error=Error|undefined;


function App() {
    const [contributorsData, setContributorsData] = useState<ContributorsData[]>([]);

    useEffect(()=>{
        (async ()=>{
       try {
           const response = await axios.get("http://localhost:3000/");
           setContributorsData(response.data.data);
           toast.success(response.data.message)
       }catch (e){
        const error = e as Error;
        toast.error(error.message);
       }
        })()

    },[])

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster position={"top-right"} />
          <HomePage contributorData={contributorsData}/>
      </ThemeProvider>
  )
}

export default App
