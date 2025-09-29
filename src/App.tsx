
import './App.css'
import {ThemeProvider} from "./components/theme-provider.tsx";
import HomePage from "@/page/homePage.tsx";
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
          <HomePage contributorData={contributorsData}/>
      </ThemeProvider>
  )
}

export default App
