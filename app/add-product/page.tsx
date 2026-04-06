'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const router = useRouter()
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch('/add-product/api',{
                method:'POST',
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify(formData)
            })
            if(response.ok){
                router.push('/products-db')
            }
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    };

      
    return(
        <div className="min-h-[calc(100vh-80px)] bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Create New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                            Product Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter product title"
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter product description"
                            rows={5}
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        ></textarea>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            Error: {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Creating...' : 'Create Product'}
                    </button>
                </form>
            </div>
        </div>
    )
}