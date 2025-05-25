'use client'; // Adicione esta linha no topo

import { BookForm } from '@/components/dashboard/BookForm';
import api from '@/lib/api';
import { useEffect, useState } from 'react';

export default function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get(`/books/${params.id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [params.id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Editar Livro</h1>
      <BookForm initialData={book} />
    </div>
  );
}