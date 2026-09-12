interface DashboardHeaderProps {
  title: string;
  tagline: string;
}

export default function DashboardHeader({ title, tagline }: DashboardHeaderProps) {
  return (
    <header className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500 text-sm mt-1">{tagline}</p>
      </div>
    </header>
  );
}