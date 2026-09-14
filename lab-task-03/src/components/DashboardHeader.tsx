import { useTheme } from '../context/ThemeContext';

interface DashboardHeaderProps {
  title: string;
  tagline: string;
}

export default function DashboardHeader({ title, tagline }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-lg shadow-sm mb-6 flex justify-between items-center transition-colors">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h1>
        {tagline && <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{tagline}</p>}
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="px-3.5 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-colors"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}