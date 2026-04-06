import { getProducts } from "../prisma-db";
import { ProductDetails } from "./productDetails";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDB({searchParams} :{searchParams: Promise<{query:string}>}) {

  const {query} = await searchParams;
  const allProducts: Product[] = await getProducts();

  const normalizedQuery = query?.toLowerCase().replace(/-/g, ' ') || "";
  const filteredProducts = normalizedQuery
    ? allProducts.filter((product) =>
        product.title.toLowerCase().replace(/-/g, ' ').includes(normalizedQuery)
      )
    : allProducts;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetails products={filteredProducts}/>
      </div>
    </div>
  )
}
