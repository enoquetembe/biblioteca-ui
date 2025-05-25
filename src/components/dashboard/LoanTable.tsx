'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loan } from '@/types/types';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function LoanTable() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoans() {
      try {
        const response = await api.get('/loans/my-loans');
        setLoans(response.data);
      } catch (error) {
        toast.error('Erro ao carregar empréstimos', {
          description: error.response?.data?.message || 'Tente novamente mais tarde',
        });
      } finally {
        setLoading(false);
      }
    }

    fetchLoans();
  }, []);

  const handleReturn = async (loanId: number) => {
    try {
      await api.post(`/loans/${loanId}/return`);
      setLoans(loans.map(loan => 
        loan.id === loanId 
          ? { ...loan, status: 'RETURNED', returnDate: new Date().toISOString() } 
          : loan
      ));
      toast.success('Livro devolvido com sucesso');
    } catch (error) {
      toast.error('Erro ao devolver livro', {
        description: error.response?.data?.message || 'Tente novamente mais tarde',
      });
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="rounded-md border ml-64">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Livro</TableHead>
            <TableHead>Data do Empréstimo</TableHead>
            <TableHead>Data de Devolução</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loans.map((loan) => (
            <TableRow key={loan.id}>
              <TableCell className="font-medium">{loan.book.title}</TableCell>
              <TableCell>
                {format(new Date(loan.loanDate), 'dd/MM/yyyy', { locale: ptBR })}
              </TableCell>
              <TableCell>
                {loan.returnDate 
                  ? format(new Date(loan.returnDate), 'dd/MM/yyyy', { locale: ptBR })
                  : '-'}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    loan.status === 'ACTIVE'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {loan.status === 'ACTIVE' ? 'Ativo' : 'Devolvido'}
                </span>
              </TableCell>
              <TableCell className="text-right">
                {loan.status === 'ACTIVE' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReturn(loan.id)}
                  >
                    Devolver
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}