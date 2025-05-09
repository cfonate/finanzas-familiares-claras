
import React from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { LayoutDashboard, Database, Mail, Users } from "lucide-react";

const AdminSidebar = () => {
  return (
    <Sidebar variant="inset" className="border-r">
      <SidebarHeader>
        <div className="flex items-center justify-center p-4">
          <img 
            src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
            alt="IPFF Logo" 
            className="h-8" 
          />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Panel de Administración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Dashboard" isActive={true}>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Formularios">
                  <Users />
                  <span>Envíos</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Email Queue">
                  <Mail />
                  <span>Cola de Emails</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Database">
                  <Database />
                  <span>Base de Datos</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4 text-xs text-center text-muted-foreground">
          IPFF Admin Panel v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
