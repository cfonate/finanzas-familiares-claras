
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
    <div className="flex justify-between items-center mb-6">
      <div>
        <Button 
          variant="outline" 
          onClick={onRefresh} 
          disabled={loading}
          className="flex items-center gap-2"
        >
          <RefreshCcw size={16} />
          Actualizar datos
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button 
          onClick={onExportSubmissions}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Exportar envíos
        </Button>
        <Button 
          onClick={onExportEmails}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Exportar emails
        </Button>
        <Button 
          onClick={onExportEmailsForHosting}
          className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
        >
          <FileText size={16} />
          Preparar emails
        </Button>
        <Button 
          onClick={onUpdateEmailStatus}
          className="flex items-center gap-2 bg-finance-accent text-black hover:bg-finance-accent/80"
        >
          <Send size={16} />
          Actualizar estado
        </Button>
      </div>
    </div>
  );
};

export default AdminToolbar;
