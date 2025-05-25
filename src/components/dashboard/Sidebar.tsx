'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  BookOpen,
  Home,
  Library,
  LogOut,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { name: 'Dashboard', href: '/books', icon: Home },
  { name: 'Livros', href: '/books', icon: Book },
  { name: 'Empréstimos', href: '/loans', icon: Library },
  { name: 'Perfil', href: '/profile', icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 border-r bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center px-4 mb-8">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-800">
              Biblioteca
            </h1>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <link.icon
                  className={`mr-3 h-5 w-5 ${
                    pathname === link.href
                      ? 'text-indigo-600'
                      : 'text-gray-500'
                  }`}
                />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:bg-gray-100"
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-500" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}