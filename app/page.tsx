import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Welcome to Revnix</h1>
        <p className="text-xl text-gray-700 mb-12">Manage your products with ease</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={'/server'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Server
          </Link>
          <Link 
            href={'/client'}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Client
          </Link>
          <Link 
            href={'/product-db'}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}
