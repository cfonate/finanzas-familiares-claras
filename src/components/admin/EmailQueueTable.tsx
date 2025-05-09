
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
import { Card } from "@/components/ui/card";

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

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Cola de Correos Electrónicos</h2>
      {loading ? (
        <p className="text-center py-4">Cargando...</p>
      ) : emailQueue.length === 0 ? (
        <p className="text-center py-4">No hay correos en cola</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>Lista de correos en cola</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Destinatario</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Asunto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emailQueue.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>{formatDate(email.created_at)}</TableCell>
                  <TableCell>{email.recipient_name}</TableCell>
                  <TableCell>{email.recipient_email}</TableCell>
                  <TableCell>{email.subject}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      email.status === 'sent' 
                        ? 'bg-green-100 text-green-800' 
                        : email.status === 'error'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {email.status}
                    </span>
                  </TableCell>
                  <TableCell>{email.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default EmailQueueTable;
