"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {AddContent} from "@/components/addContent.tsx";
import type {ContributorsData} from "@/App.tsx";

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/*<TeamSwitcher teams={data.teams} />*/}
          <div className={"w-full flex items-center justify-center"}>
              <img src={"./logo.png"} alt="logo" className={"rounded-xl w-[11vw]"} />
          </div>
      </SidebarHeader>
      <SidebarContent>
        {/*<NavMain items={data.navMain} />*/}
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      <SidebarFooter>

          <AddContent/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
