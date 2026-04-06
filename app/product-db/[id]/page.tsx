
import { getProduct } from '@/app/prisma-db';
import EditForm from './EditForm';
import { notFound } from 'next/navigation';
import { Product } from '@prisma/client';




export default async function EditProductServer({params}:{params :Promise<{id:string}>}){

    const {id} = await params
    const product:Product | null= await getProduct(Number(id))
    
    if(!product){
        notFound()
    }
    return(
        <EditForm product={product} />
    )
}
