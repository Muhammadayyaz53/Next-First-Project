import Form from 'next/form'

export default function UserSearch() {

  return (
    <div>
      <Form action="/product-db" className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
        <input 
          type="text" 
          placeholder='Search products...' 
          name='query' 
          className='bg-transparent text-gray-700 placeholder-gray-500 outline-none flex-1 text-sm'
        />
        <button 
          type='submit'
          className='bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium'
        >
          GO
        </button>
      </Form>
    </div>
  );
}
