import { LoanTable } from '@/components/dashboard/LoanTable';

export default function LoansPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meus Empréstimos</h1>
      <LoanTable />
    </div>
  );
}