const Shimmer = () => {
    const NO_OF_SHIMMER_CARDS = 8;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-auto max-w-7xl pb-40">
            {Array(NO_OF_SHIMMER_CARDS).fill("").map((_, index) => (
                <div
                    key={index}
                    className="w-[250px] m-4 p-4 hover:bg-gray-200 h-80 bg-gray-100 rounded-lg animate-pulse"
                >
                    <div className="h-40 bg-gray-300 rounded-t-lg"></div>
                    <div className="p-4 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
