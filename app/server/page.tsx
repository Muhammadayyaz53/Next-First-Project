import { clientFun } from "../utils/client-lib"
// import { serverFun } from "../utils/server-lib"

export default function serverPage(){
console.log('Server Component')
// const res = serverFun() 
const res = clientFun() 
    return (
        <div className="min-h-[calc(100vh-80px)] bg-linear-to-br from-green-50 to-blue-100 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Server Component</h2>
                    <div className="bg-green-100 border-2 border-green-300 rounded-lg p-6 mt-6">
                        <p className="text-lg text-gray-700">Result: <span className="font-bold text-green-600">{res}</span></p>
                    </div>
                    <p className="text-gray-600 mt-6">This page is rendered on the server side</p>
                </div>
            </div>
        </div>
    )
}