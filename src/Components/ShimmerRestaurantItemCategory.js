const ShimmerRestaurantItemCategory = () => {
  return (
    <div className="text-center px-4 py-10 max-w-4xl mx-auto pb-40 animate-pulse">
      {/* Restaurant Name */}
      <div className="h-8 w-1/3 bg-gray-300 rounded mx-auto mb-6"></div>

      {/* Cuisine & Cost */}
      <div className="h-5 w-1/2 bg-gray-200 rounded mx-auto mb-10"></div>

      {/* Categories Skeleton */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          key={index}
          className="bg-white w-full rounded-lg shadow-md mb-5 px-6 py-4 text-left"
        >
          {/* Category title */}
          <div className="h-6 w-1/4 bg-gray-300 rounded mb-4"></div>

          {/* Item placeholders */}
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerRestaurantItemCategory;
