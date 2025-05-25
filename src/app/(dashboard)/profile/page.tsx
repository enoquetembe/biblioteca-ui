'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function ProfilePage() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
    createdAt: string;
  } | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          const response = await api.get(`/users/${parsedUser.id}`);
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-500">Nome</h2>
            <p className="mt-1 text-gray-900">{user.name}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-500">Email</h2>
            <p className="mt-1 text-gray-900">{user.email}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-500">Tipo de Usuário</h2>
            <p className="mt-1 text-gray-900 capitalize">{user.role.toLowerCase()}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-500">Membro desde</h2>
            <p className="mt-1 text-gray-900">
              {new Date(user.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}