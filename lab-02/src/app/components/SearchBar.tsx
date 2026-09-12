export default function SearchBar({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search here." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 p-2 rounded text-sm w-64 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}