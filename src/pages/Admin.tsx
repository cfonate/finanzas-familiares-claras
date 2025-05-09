
import React, { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminToolbar from "@/components/admin/AdminToolbar";
import SubmissionsTable from "@/components/admin/SubmissionsTable";
import EmailQueueTable from "@/components/admin/EmailQueueTable";
import { useAdminData } from "@/components/admin/useAdminData";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const {
    submissions,
    emailQueue,
    loading,
    fetchData,
    exportToCSV,
    exportEmailsForHosting,
    handleUpdateEmailStatus,
    getDateForFilename
  } = useAdminData();

  const handleAdminLogin = () => {
    setIsAdmin(true);
    fetchData();
  };

  if (!isAdmin) {
    return (
      <div className="container mx-auto max-w-md py-16 px-4">
        <div className="flex justify-center mb-10">
          <img 
            src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
            alt="IPFF Logo" 
            className="h-16" 
          />
        </div>
        <AdminLogin onLogin={handleAdminLogin} />
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full h-svh">
        <AdminSidebar />
        <SidebarInset>
          <div className="px-8 py-6">
            <AdminHeader />
            
            <AdminToolbar
              loading={loading}
              onRefresh={fetchData}
              onExportSubmissions={() => 
                exportToCSV(submissions, `submissions_${getDateForFilename()}.csv`)
              }
              onExportEmails={() => 
                exportToCSV(emailQueue, `email_queue_${getDateForFilename()}.csv`)
              }
              onExportEmailsForHosting={exportEmailsForHosting}
              onUpdateEmailStatus={handleUpdateEmailStatus}
            />
            
            <div className="space-y-8 mt-8">
              <SubmissionsTable 
                submissions={submissions} 
                loading={loading} 
              />
              
              <EmailQueueTable 
                emailQueue={emailQueue} 
                loading={loading} 
              />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
