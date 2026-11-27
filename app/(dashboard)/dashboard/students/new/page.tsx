'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddStudentPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      class: formData.get('class'),
      stream: formData.get('stream'),
      guardianId: 1,
    };

    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to create student');

      form.reset();
      setIsLoading(false);
      router.push('/dashboard?success=true');
      router.refresh();
    } catch (err) {
      setError('Failed to create student. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">
        Add New Student
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Class (S1-S6)
            </label>
            <select name="class" required className="w-full border p-2 rounded">
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="S6">S6</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Stream</label>
            <input
              type="text"
              name="stream"
              required
              className="w-full border p-2 rounded"
              placeholder="e.g. A, B, Science"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Student'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/dashboard')}
            className="border px-6 py-2 rounded font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
