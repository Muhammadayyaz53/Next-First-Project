import Link from "next/link";
import UserSearch from "./UserSearch";

export default function Header(){

    return(
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition duration-300">
                            Revnix
                        </Link>
                    </div>

                    {/* Navbar Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                            Home
                        </Link>
                        <Link href="/product-db" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                            Products
                        </Link>
                        <Link href="/add-product" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                            Add Product
                        </Link>
                    </nav>

                    {/* User Search Component */}
                    <div className="flex items-center space-x-4">
                        <UserSearch/>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}