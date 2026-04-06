
'use client'
//  error file must be use cilent compent

export default function Error({error} : {error : Error}){
return(
    <div className="min-h-[calc(100vh-80px)] bg-red-50 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
            <p className="text-red-600 font-semibold mb-6">Error: {error.message}</p>
            <button 
                onClick={() => window.location.reload()}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
                Try Again
            </button>
        </div>
    </div>
)
}