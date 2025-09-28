
import './App.css'
import {ThemeProvider} from "./components/theme-provider.tsx";
import Page from "@/components/dashboard.tsx";
import {useEffect, useState} from "react";
import axios from "axios"

export interface ContributorsData{
    name:string;
    raseedNo:number;
    amount:number;
    isPaid:boolean;
    _id:string;
}


function App() {
    const [contributorsData, setContributorsData] = useState<ContributorsData[]>([]);

    useEffect(()=>{
        (async ()=>{
        const response = await axios.get("http://localhost:3000/");
        setContributorsData(response.data.data);
        })()

    },[])

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Page contributorData={contributorsData}/>
      </ThemeProvider>
  )
}

export default App
