export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <h2 className="text-gray-500 font-semibold">Total Students</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">450</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
          <h2 className="text-gray-500 font-semibold">Fees Collected</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">UGX 12M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-amber-500">
          <h2 className="text-gray-500 font-semibold">Outstanding Fees</h2>
          <p className="text-3xl font-bold text-slate-800 mt-2">UGX 3.5M</p>
        </div>
      </div>
    </div>
  );
}
