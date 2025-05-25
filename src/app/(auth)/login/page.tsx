import {LoginForm} from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Biblioteca Moderna</h1>
          <p className="text-gray-600 mt-2">Acesse sua conta</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}