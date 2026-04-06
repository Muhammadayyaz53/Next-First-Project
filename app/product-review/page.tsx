import { Suspense } from "react";
import Review from "../components/Review";
import Products from "../products/page";

export default function ProductReview() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Product Review</h1>
          <p className="text-lg text-gray-600">Check out our products and reviews</p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Suspense fallback={
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading products...</p>
              </div>
            }>
              <Products />
            </Suspense>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <Suspense fallback={
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading reviews...</p>
              </div>
            }>
              <Review />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
