export default async function Review(){
    await new Promise ((resolve) => setTimeout(resolve, 5000))
    return(
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Review</h2>
            <p className="text-gray-600">Loading review content...</p>
        </div>
    )
}