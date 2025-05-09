
import React, { useState } from "react";
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

  return (
    <div className="container mx-auto py-8 px-4">
      <AdminHeader />

      {!isAdmin ? (
        <AdminLogin onLogin={handleAdminLogin} />
      ) : (
        <>
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
          
          <SubmissionsTable 
            submissions={submissions} 
            loading={loading} 
          />
          
          <EmailQueueTable 
            emailQueue={emailQueue} 
            loading={loading} 
          />
        </>
      )}
    </div>
  );
};

export default Admin;
