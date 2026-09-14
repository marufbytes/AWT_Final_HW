import { useStudents } from '../context/StudentContext';

export default function SortControls() {
  const { sortType, setSortType } = useStudents();

  return (
    <div className="flex gap-2 items-center text-sm flex-wrap">
      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Sort By:</span>
      <button 
        onClick={() => setSortType('default')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${sortType === 'default' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
      >
        Default
      </button>
      <button 
        onClick={() => setSortType('name')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${sortType === 'name' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
      >
        Name
      </button>
      <button 
        onClick={() => setSortType('gpa')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${sortType === 'gpa' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
      >
        CGPA
      </button>
    </div>
  );
}