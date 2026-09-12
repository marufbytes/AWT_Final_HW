import { useStudents } from "../context/StudentContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useStudents();
  return (
    <input 
      type="text" 
      placeholder="Search by name or major..." 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 rounded text-sm w-64 dark:bg-gray-700 dark:border-gray-600"
    />
  );
}