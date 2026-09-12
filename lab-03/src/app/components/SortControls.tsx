import { useStudents } from "../context/StudentContext";

export default function SortControls() {
  const { setSortBy } = useStudents();
  return (
    <div className="mb-6 flex gap-2 items-center">
      <span className="text-sm font-bold">Sort By:</span>
      <button onClick={() => setSortBy("default")} className="border px-3 py-1 rounded text-sm bg-gray-50 dark:bg-gray-700">Default</button>
      <button onClick={() => setSortBy("name")} className="border px-3 py-1 rounded text-sm bg-gray-50 dark:bg-gray-700">Name (A-Z)</button>
      <button onClick={() => setSortBy("gpa")} className="border px-3 py-1 rounded text-sm bg-gray-50 dark:bg-gray-700">GPA (High to Low)</button>
    </div>
  );
}