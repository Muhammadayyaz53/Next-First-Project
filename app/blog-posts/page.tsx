import { Suspense } from "react";
import Author from "./Author";

export default async function BlogPoast() {
  type Blog = {
    userId: string;
    id: string;
    title: string;
    body: string;
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs:Blog[] = await response.json();
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Blog Posts</h1>
          <p className="text-lg text-gray-600">Discover amazing articles from our community</p>
        </div>
        
        <div className="space-y-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{blog.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{blog.body}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Suspense fallback={<div className="text-gray-500 italic text-sm">Loading author information...</div>}>
                  <div className="text-sm"><Author userId={blog.userId} /></div>
                </Suspense>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
  );
}
