interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader = ({ className = "" }: SkeletonLoaderProps) => (
  <div className={`animate-pulse bg-purple-700/30 rounded ${className}`} />
);

export const DeveloperCardSkeleton = () => (
  <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden">
    <div className="flex items-start justify-between mb-4">
      <SkeletonLoader className="w-12 h-12 rounded-xl" />
      <SkeletonLoader className="w-20 h-6 rounded-full" />
    </div>
    
    <SkeletonLoader className="h-6 w-3/4 mb-2" />
    <SkeletonLoader className="h-4 w-1/2 mb-2" />
    <SkeletonLoader className="h-4 w-2/3 mb-4" />
    
    <div className="flex items-center mb-4">
      <SkeletonLoader className="w-4 h-4 rounded mr-2" />
      <SkeletonLoader className="h-4 w-1/3" />
    </div>
    
    <div className="flex items-center mb-4">
      <SkeletonLoader className="w-4 h-4 rounded mr-2" />
      <SkeletonLoader className="h-4 w-1/4" />
    </div>
    
    <div className="flex flex-wrap gap-2">
      <SkeletonLoader className="h-6 w-16 rounded-full" />
      <SkeletonLoader className="h-6 w-20 rounded-full" />
    </div>
  </div>
);

export const LeaderboardSkeleton = () => (
  <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 w-full md:w-[400px]">
    <div className="flex items-center justify-between mb-8">
      <div>
        <SkeletonLoader className="h-8 w-48 mb-2" />
        <SkeletonLoader className="h-4 w-32" />
      </div>
      <SkeletonLoader className="w-12 h-12 rounded-xl" />
    </div>

    <div className="mb-8">
      <div className="relative flex justify-between items-end h-[280px] px-4">
        <div className="absolute bottom-0 left-4 flex flex-col items-center">
          <SkeletonLoader className="w-14 h-14 rounded-2xl mb-2" />
          <SkeletonLoader className="h-4 w-16 mb-1" />
          <SkeletonLoader className="h-3 w-12 mb-2" />
          <SkeletonLoader className="h-6 w-8 mb-2" />
          <SkeletonLoader className="w-20 h-28 rounded-t-2xl" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <SkeletonLoader className="w-16 h-16 rounded-2xl mb-2" />
          <SkeletonLoader className="h-4 w-20 mb-1" />
          <SkeletonLoader className="h-3 w-16 mb-2" />
          <SkeletonLoader className="h-6 w-10 mb-2" />
          <SkeletonLoader className="w-24 h-36 rounded-t-2xl" />
        </div>

        <div className="absolute bottom-0 right-4 flex flex-col items-center">
          <SkeletonLoader className="w-14 h-14 rounded-2xl mb-2" />
          <SkeletonLoader className="h-4 w-16 mb-1" />
          <SkeletonLoader className="h-3 w-12 mb-2" />
          <SkeletonLoader className="h-6 w-8 mb-2" />
          <SkeletonLoader className="w-20 h-24 rounded-t-2xl" />
        </div>
      </div>
    </div>

    <div className="space-y-3">
      {[...Array(7)].map((_, index) => (
        <div key={index} className="flex items-center gap-4 p-2 rounded-2xl">
          <SkeletonLoader className="w-6 h-4" />
          <SkeletonLoader className="w-12 h-12 rounded-xl" />
          <div className="flex-1">
            <SkeletonLoader className="h-4 w-24 mb-1" />
            <SkeletonLoader className="h-3 w-20" />
          </div>
          <SkeletonLoader className="h-6 w-8" />
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonLoader;