
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
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Envíos de Formularios</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-finance-primary"></div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No hay envíos de formularios
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Lista de envíos de formularios</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Fecha</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Puntuación</TableHead>
                  <TableHead className="text-right">Categoría</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-mono text-xs">
                      {formatDate(submission.created_at)}
                    </TableCell>
                    <TableCell>
                      {`${submission.first_name} ${submission.last_name}`}
                    </TableCell>
                    <TableCell>
                      <span className="text-blue-600">{submission.email}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      {submission.results?.percentage !== undefined ? (
                        <span className="font-medium">{submission.results.percentage}%</span>
                      ) : (
                        '—'
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {submission.results?.category ? (
                        <span className="px-2 py-1 bg-finance-secondary/20 rounded-full text-xs">
                          {submission.results.category}
                        </span>
                      ) : (
                        '—'
                      )}
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

export default SubmissionsTable;
