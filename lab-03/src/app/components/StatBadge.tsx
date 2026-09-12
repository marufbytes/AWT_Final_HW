export default function StatBadge({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="inline-block border border-gray-300 px-3 py-1 m-1 rounded bg-gray-50 text-sm">
      <span><b>{label}:</b> {value}</span>
    </div>
  );
}