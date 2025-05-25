import { BookTable } from '@/components/dashboard/BookTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function BooksPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Livros</h1>
        <Link href="/books/add">
          <Button>Adicionar Livro</Button>
        </Link>
      </div>
      <BookTable />
    </div>
  );
}