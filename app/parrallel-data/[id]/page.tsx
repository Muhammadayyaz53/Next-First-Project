
async function getUserPosts(userId:string ){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
return response.json()
}


async function getUserAlbums(userId:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
return response.json()
}

export default async function ParallelData({params} : {params : Promise < {id : string} >}){
    const {id} = await params
const allPosts = getUserPosts(id)
const allAlbums = getUserAlbums(id)

const [posts , albums] = await Promise.all([allPosts,allAlbums])

    return(
        <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Parallel Data Loading</h1>
                    <p className="text-lg text-gray-600">Fetched posts and albums in parallel</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Posts Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">📝</span>
                            Blog Posts
                        </h2>
                        <div className="space-y-4">
                            {posts.map(post => (
                                <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-blue-600">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                                    <p className="text-gray-600 line-clamp-3">{post.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Albums Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">🎨</span>
                            Albums
                        </h2>
                        <div className="space-y-3">
                            {albums.map(album => (
                                <div key={album.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border-l-4 border-green-600 flex items-center justify-between">
                                    <h3 className="font-semibold text-gray-900">{album.title}</h3>
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Album #{album.id}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}