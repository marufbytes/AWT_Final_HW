import { useTheme } from "../context/ThemeContext";
import { useStudents } from "../context/StudentContext";

export default function DashboardHeader({ title, tagline }: { title: string; tagline: string }) {
  const { theme, toggleTheme } = useTheme();
  const { favorites, successMessage } = useStudents();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{tagline}</p>
        {successMessage && <p className="text-green-600 text-xs font-bold mt-1">{successMessage}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">Favorites: {favorites.length}</div>
        <button onClick={toggleTheme} className="border px-3 py-1 rounded text-xs bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}