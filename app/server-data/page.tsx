

export default async function serverData() {

 await new Promise ((resolve) =>setTimeout(resolve, 5000))
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Server Data</h1>
          <p className="text-lg text-gray-600">Data fetched from server side rendering</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map(user => 
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-green-600" key={user.id}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h3>
              <p className="text-gray-600 mb-3"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-gray-600 mb-3"><span className="font-semibold">Phone:</span> {user.phone}</p>
              <p className="text-gray-600"><span className="font-semibold">Company:</span> {user.company?.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
