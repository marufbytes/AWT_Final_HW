export default function DashboardHeader({ title, tagline }: { title: string; tagline: string }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
      
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-sm">{tagline}</p>
    </div>
  );
}