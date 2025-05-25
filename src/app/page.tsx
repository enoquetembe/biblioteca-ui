import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Biblioteca Moderna</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Gerencie seu acervo de livros e empréstimos de forma simples e eficiente
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/login">
          <Button size="lg">Entrar</Button>
        </Link>
        <Link href="/register">
          <Button size="lg" variant="outline">
            Registrar
          </Button>
        </Link>
      </div>
    </div>
  );
}