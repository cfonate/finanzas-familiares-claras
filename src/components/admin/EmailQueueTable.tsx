
import React from "react";
import { format } from "date-fns";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface EmailQueueItem {
  id: string;
  created_at: string;
  recipient_name: string;
  recipient_email: string;
  subject: string;
  status: string;
  type: string;
}

interface EmailQueueTableProps {
  emailQueue: EmailQueueItem[];
  loading: boolean;
}

const EmailQueueTable = ({ emailQueue, loading }: EmailQueueTableProps) => {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm:ss');
    } catch (e) {
      return dateString;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'sent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Cola de Correos Electrónicos</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-finance-primary"></div>
          </div>
        ) : emailQueue.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No hay correos en cola
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Lista de correos en cola</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Fecha</TableHead>
                  <TableHead>Destinatario</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Asunto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Tipo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emailQueue.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell className="font-mono text-xs">
                      {formatDate(email.created_at)}
                    </TableCell>
                    <TableCell>
                      {email.recipient_name}
                    </TableCell>
                    <TableCell>
                      <span className="text-blue-600">{email.recipient_email}</span>
                    </TableCell>
                    <TableCell>
                      {email.subject}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusBadgeClass(email.status)}`}>
                        {email.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="px-2 py-1 rounded-lg text-xs bg-muted">
                        {email.type}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EmailQueueTable;
