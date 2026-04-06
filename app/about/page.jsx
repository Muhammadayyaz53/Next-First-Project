import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export default async function About() {
  const cookieStore = await cookies()
  console.log(cookieStore.get('abcd'))

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Page</h1>
          <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg p-6 mt-6 inline-block">
            <p className="text-lg text-gray-700">Current Time: <span className="font-bold text-indigo-600">{new Date().toLocaleTimeString()}</span></p>
          </div>
          <p className="text-gray-600 mt-6">This is a dynamically generated page that updates with current time</p>
        </div>
      </div>
    </div>
  )
}