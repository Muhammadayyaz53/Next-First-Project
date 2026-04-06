import Link from "next/link";

export default function Products(){
    const products = [
        { id: 1, name: 'Product 1', price: 99.99 },
        { id: 2, name: 'Product 2', price: 149.99 },
        { id: 3, name: 'Product 3', price: 199.99 }
    ];

    return(
        <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Products</h1>
                    <p className="text-lg text-gray-600">Browse our collection of premium products</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group">
                                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 h-40 flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-700 transition-all duration-300">
                                    <span className="text-white text-5xl font-bold opacity-50">📦</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                    <p className="text-2xl font-bold text-green-600">${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}