import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Kiganda SMS</h1>
      <p className="text-xl text-gray-600 mb-8">
        Welcome to the Kiganda Management System
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
