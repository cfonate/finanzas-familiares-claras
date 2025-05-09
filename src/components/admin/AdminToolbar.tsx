
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Download, FileText, Send } from "lucide-react";

interface AdminToolbarProps {
  loading: boolean;
  onRefresh: () => void;
  onExportSubmissions: () => void;
  onExportEmails: () => void;
  onExportEmailsForHosting: () => void;
  onUpdateEmailStatus: () => void;
}

const AdminToolbar = ({
  loading,
  onRefresh,
  onExportSubmissions,
  onExportEmails,
  onExportEmailsForHosting,
  onUpdateEmailStatus,
}: AdminToolbarProps) => {
  return (
    <div className="flex justify-end mb-4 gap-2 flex-wrap">
      <Button 
        variant="outline" 
        onClick={onRefresh} 
        disabled={loading}
        className="flex items-center gap-2"
      >
        <RefreshCcw size={18} />
        Actualizar datos
      </Button>
      <Button 
        onClick={onExportSubmissions}
        className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
      >
        <Download size={18} />
        Exportar envíos
      </Button>
      <Button 
        onClick={onExportEmails}
        className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
      >
        <Download size={18} />
        Exportar cola de emails
      </Button>
      <Button 
        onClick={onExportEmailsForHosting}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
      >
        <FileText size={18} />
        Exportar emails para hosting
      </Button>
      <Button 
        onClick={onUpdateEmailStatus}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white"
      >
        <Send size={18} />
        Actualizar estado de emails
      </Button>
    </div>
  );
};

export default AdminToolbar;
