export default async function Author( {userId}: {userId:string}){
await new Promise((resolve) => setTimeout(resolve, 3000))

const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

const author = await response.json()

    return(
        <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-blue-700">By {author.name}</span>
        </div>
    )
}
}