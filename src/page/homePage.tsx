import { AppSidebar } from "@/components/app-sidebar.tsx"

import { Separator } from "@/components/ui/separator.tsx"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar.tsx"
import {CardComponent} from "@/components/card.tsx";
import type {ContributorsData} from "@/App.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useRef} from "react";
import axios from "axios";
import {toast} from "sonner";
import {useContentStore} from "@/store.ts";

interface PageProps {
    contributorData:ContributorsData[];

}

export default function HomePage(props:PageProps) {

    // @ts-ignore
    const serachInput=useRef<HTMLInputElement>();
    const {searchContent}=useContentStore();
async function search(){
try {
    const value=serachInput.current.value;
    searchContent(value);
    }   catch (e ){
    const error=e as Error;
    toast.error(error.message);
}
}




    return (
        <SidebarProvider>
            <AppSidebar   />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 ">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />

                     <Input ref={serachInput} placeholder={"Search"} type={"text"} name={"search-input"} id="search-input" />
                        <Button variant={"outline"} type={"button"} onClick={search}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>

                        </Button>
                    </div>
                </header>
                <div className="border flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        {props.contributorData.map((contributor: ContributorsData) => (
                           <CardComponent key={contributor._id} contributorData={contributor} />
                        ))}
                    </div>
                    {/*<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />*/}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
