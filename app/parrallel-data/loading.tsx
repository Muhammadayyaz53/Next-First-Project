export default function Loading(){
    return(
        <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 font-semibold">Loading data...</p>
                <p className="text-gray-500 mt-2">This may take a few moments</p>
            </div>
        </div>
    )
}