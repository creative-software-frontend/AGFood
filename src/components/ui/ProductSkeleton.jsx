const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-100 flex flex-col h-full w-full animate-pulse">
      {/* Image Placeholder */}
      <div className="relative aspect-square mb-3 rounded-sm bg-gray-200 w-full" />

      {/* Content Placeholder */}
      <div className="flex flex-col flex-grow text-center md:text-left">
        {/* Title Lines */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 mx-auto md:mx-0" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3 mx-auto md:mx-0" />
        
        {/* Price Line */}
        <div className="h-5 bg-gray-100 rounded w-1/3 mb-4 mx-auto md:mx-0" />

        {/* Button Placeholder */}
        <div className="mt-auto pt-2">
          <div className="w-full h-10 bg-gray-200 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;