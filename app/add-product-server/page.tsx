
'use client'
import { useActionState } from 'react'
import { FormState, addProductHandler } from '../actions/product-action';




export default function AddProductServer(){

    const initialState:FormState = { 
        errors:{}
    }

    const [state, formAction, isPending] = useActionState(addProductHandler, initialState)

    return(
            <div className="min-h-[calc(100vh-80px)] bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Create Product (Server Action)</h2>
                <form action={formAction} noValidate className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                            Product Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter product title"
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                        {state.errors.title && <p className="text-red-600 text-sm font-semibold mt-1">{state.errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Enter price"
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                        {state.errors.price && <p className="text-red-600 text-sm font-semibold mt-1">{state.errors.price}</p>}
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter product description"
                            rows={5}
                            required
                            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        ></textarea>
                        {state.errors.description && <p className="text-red-600 text-sm font-semibold mt-1">{state.errors.description}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 px-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50"
                    >
                        {isPending ? 'Creating...' : 'Create Product'}
                    </button>
                </form>
            </div>
        </div>
    )
}
