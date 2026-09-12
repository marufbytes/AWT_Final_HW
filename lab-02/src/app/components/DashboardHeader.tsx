export default function DashboardHeader({ title, tagline, favoriteCount }: { title: string; tagline: string; favoriteCount: number }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm">{tagline}</p>
      </div>
      <div className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
        Favorites: {favoriteCount}
      </div>
    </div>
  );
}