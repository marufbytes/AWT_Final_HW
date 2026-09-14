interface SortControlsProps {
  currentSort: string;
  onSortChange: (sortType: string) => void;
}

export default function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex gap-2 items-center text-sm flex-wrap">
      <span className="text-xs text-slate-500 font-semibold">Sort By:</span>
      <button 
        onClick={() => onSortChange('default')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${currentSort === 'default' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
      >
        Default
      </button>
      <button 
        onClick={() => onSortChange('name')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${currentSort === 'name' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
      >
        Name
      </button>
      <button 
        onClick={() => onSortChange('gpa')}
        className={`px-3 py-1.5 border rounded-lg text-xs font-medium transition-colors ${currentSort === 'gpa' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
      >
        CGPA
      </button>
    </div>
  );
}