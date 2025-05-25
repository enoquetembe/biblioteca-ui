import {RegisterForm} from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Criar Conta</h1>
          <p className="text-gray-600 mt-2">Preencha seus dados para se registrar</p>
        </div>
        <RegisterForm />
        <p className="text-center mt-4 text-sm text-gray-600">
          Já tem uma conta?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}