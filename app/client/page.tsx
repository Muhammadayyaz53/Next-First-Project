'use client'

import { useEffect, useState } from "react"
import { useRootContext } from "../components/UserContext"
import { clientFun } from "../utils/client-lib"

export default function ClientPage() {
    const [value, setValue] = useState('')
    const rootUSer = useRootContext()
    const res = clientFun()

    useEffect(() => {
        setValue('Helloe Next.js')
    }, [])

    // useEffect(() => {
    //     console.log('Client ayyaz Component', value)
    // }, [value])

    // return <h2>Client page- {rootUSer.name}</h2>
     useEffect(() => {
        console.log('Hello Next.js')
    }, [])
    console.log('client Component', value)
     return (
        <div className="min-h-[calc(100vh-80px)] bg-linear-to-br from-purple-50 to-pink-100 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Component</h2>
                    <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-6 mt-6">
                        <p className="text-lg text-gray-700 mb-2">User: <span className="font-bold text-purple-600">{rootUSer.name}</span></p>
                        <p className="text-lg text-gray-700">Result: <span className="font-bold text-purple-600">{res}</span></p>
                    </div>
                    <p className="text-gray-600 mt-6">This page is rendered on the client side</p>
                </div>
            </div>
        </div>
    )
}

