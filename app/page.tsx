import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    // Use 'fixed inset-0' to cover the entire browser viewport
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/school-hero.png"
        alt="Highway Secondary School Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay at 30% opacity */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Highway SS Management System
        </h1>
        <p className="text-xl text-gray-100 mb-8 drop-shadow-md">
          Welcome to the Highway SS Management System
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
            className="bg-white text-blue-600 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
