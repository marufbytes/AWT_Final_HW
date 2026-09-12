export default function SortControls({ setSortBy }: { setSortBy: (sort: string) => void }) {
  return (
    <div className="mb-6 flex gap-2 items-center">
      <span className="text-sm font-bold text-gray-700">Sort By:</span>
      <button onClick={() => setSortBy("default")} className="border px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100">Default</button>
      <button onClick={() => setSortBy("name")} className="border px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100">Name </button>
      <button onClick={() => setSortBy("gpa")} className="border px-3 py-1 rounded text-sm bg-gray-50 hover:bg-gray-100">CGPA </button>
    </div>
  );
}