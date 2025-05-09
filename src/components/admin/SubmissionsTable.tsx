
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

interface Submission {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  results?: {
    percentage?: number;
    category?: string;
  };
}

interface SubmissionsTableProps {
  submissions: Submission[];
  loading: boolean;
}

const SubmissionsTable = ({ submissions, loading }: SubmissionsTableProps) => {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm:ss');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Card className="p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Envíos de Formularios</h2>
      {loading ? (
        <p className="text-center py-4">Cargando...</p>
      ) : submissions.length === 0 ? (
        <p className="text-center py-4">No hay envíos de formularios</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>Lista de envíos de formularios</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Puntuación</TableHead>
                <TableHead>Categoría</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{formatDate(submission.created_at)}</TableCell>
                  <TableCell>{`${submission.first_name} ${submission.last_name}`}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.results?.percentage || '—'}%</TableCell>
                  <TableCell>{submission.results?.category || '—'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default SubmissionsTable;
