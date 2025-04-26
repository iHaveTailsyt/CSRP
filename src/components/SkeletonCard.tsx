export default function SkeletonCard() {
    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse">
        <div className="w-full h-48 bg-gray-700" />
        <div className="p-6">
          <div className="h-6 bg-gray-700 rounded mb-4" />
          <div className="h-4 bg-gray-700 rounded w-3/4" />
        </div>
      </div>
    );
  }
  