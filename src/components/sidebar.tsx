import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import {Search, Home, Inbox, CalendarIcon, Settings, type LucideIcon} from "lucide-react";

interface Items{
    title:string;
    url:string;
    icon:LucideIcon;
}

export function SidebarComponent() {
    const items:Items[] = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Calendar",
            url: "#",
            icon: CalendarIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]
    return(
        <div className={"border border-red-700"}>
            <Sidebar variant={"sidebar"} collapsible={"icon"} >

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </div>
    )
}