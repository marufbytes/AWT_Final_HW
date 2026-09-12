interface StatBadgeProps {
  label: string;
  value: string | number;
}

export default function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm inline-block">
      <span className="text-xs text-slate-500 font-semibold">{label}: </span>
      <span className="text-sm font-bold text-slate-800">{value}</span>
    </div>
  );
}