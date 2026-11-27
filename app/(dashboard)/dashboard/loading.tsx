export default function Loading() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-10 w-1/3 bg-gray-200 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="h-32 bg-gray-200 rounded-lg"></div>
      </div>
      <div className="h-64 bg-gray-200 rounded-lg"></div>
    </div>
  );
}