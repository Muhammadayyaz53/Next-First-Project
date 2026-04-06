'use client'
import Link from "next/link";
import { useOptimistic } from "react";
import { DeleteProductHandler } from "../actions/product-action";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetails = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId: number) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProduct = async (id: number) => {
    setOptimisticProducts(id);
    await DeleteProductHandler(id);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Products</h2>
        <p className="text-gray-600">Browse and manage all your products</p>
      </div>

      {optimisticProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {optimisticProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`product-db/${product.id}`} className="hover:text-blue-600 transition-colors">
                    {product.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href={`/product-db/${product.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium text-center transition-colors duration-300"
                  >
                    Edit
                  </Link>
                  <form action={removeProduct.bind(null, product.id)} className="flex-1">
                    <button
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
