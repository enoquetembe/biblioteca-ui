import { BookForm } from '@/components/dashboard/BookForm';

export default function AddBookPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Adicionar Livro</h1>
      <BookForm />
    </div>
  );
}