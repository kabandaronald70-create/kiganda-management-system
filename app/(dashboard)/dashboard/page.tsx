import type { Metadata } from 'next';
import DataTable from '@/components/DataTable';
import { prisma } from '@/lib/prisma';
import { signOut } from '@/auth';
import Link from 'next/link';
import SuccessBanner from '@/components/SuccessBanner';
import { archiveStudent } from '@/lib/auth-actions';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
};

export const instant = false;

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const showSuccess = params.success === 'true';

  const students = await prisma.student.findMany({
    where: { isArchived: false },
    orderBy: { id: 'desc' },
    take: 5,
  });

  const totalStudents = await prisma.student.count({
    where: { isArchived: false },
  });

  // FIX: Map the Prisma objects to plain objects to prevent hydration errors
  const plainStudents = students.map((s) => ({
    id: s.id,
    firstName: s.firstName,
    lastName: s.lastName,
    class: s.class,
    stream: s.stream,
    isArchived: s.isArchived,
  }));

  return (
    <div className="space-y-8">
      {showSuccess && <SuccessBanner />}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500">Welcome back, Administrator.</p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/dashboard/students/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Add Student
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <h2 className="text-gray-500 font-semibold">Total Active Students</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">
            {totalStudents}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
          <h2 className="text-gray-500 font-semibold">Fees Collected</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">UGX 12M</p>
          <p className="text-xs text-gray-400 mt-1">(Pending DB integration)</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-amber-500">
          <h2 className="text-gray-500 font-semibold">Outstanding Fees</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">UGX 3.5M</p>
          <p className="text-xs text-gray-400 mt-1">(Pending DB integration)</p>
        </div>
      </div>

      {/* Reusable DataTable */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Recent Student Records
        </h2>
        {plainStudents.length === 0 ? (
          <p className="text-gray-500">
            No students found. Click &quot;+ Add Student&quot; to create one.
          </p>
        ) : (
          <DataTable
            data={plainStudents}
            columns={[
              { key: 'id', header: 'ID' },
              { key: 'firstName', header: 'First Name' },
              { key: 'lastName', header: 'Last Name' },
              { key: 'class', header: 'Class' },
              { key: 'stream', header: 'Stream' },
              {
                key: 'isArchived',
                header: 'Status',
                render: (student) => (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      student.isArchived
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {student.isArchived ? 'Archived' : 'Active'}
                  </span>
                ),
              },
              {
                key: 'id',
                header: 'Actions',
                render: (student) => (
                  <form
                    action={async () => {
                      'use server';
                      await archiveStudent(student.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="text-red-600 hover:text-red-800 text-sm font-semibold hover:underline"
                    >
                      Archive
                    </button>
                  </form>
                ),
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
