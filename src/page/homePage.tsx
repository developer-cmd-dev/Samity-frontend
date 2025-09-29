import { AppSidebar } from "@/components/app-sidebar.tsx"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar.tsx"
import {CardComponent} from "@/components/card.tsx";
import type {ContributorsData} from "@/App.tsx";

interface PageProps {
    contributorData:ContributorsData[];
}

export default function HomePage(props:PageProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 ">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Contributors List
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                            </BreadcrumbList>
                        </Breadcrumb>
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
