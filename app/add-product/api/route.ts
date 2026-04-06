
import AddProduct from "../page";

export async function POST(request: Request){
    const body = await request.json()
    const { title, price, description } = body;
    const newProduct = await AddProduct(title, Number(price), description)
    return new Response(JSON.stringify(newProduct), {
        headers:{
            'Content-Type': 'application/json'
        }
    })
}