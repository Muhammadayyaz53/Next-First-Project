"use server"
import { revalidatePath } from "next/cache";
import { deleteProduct, updateProduct } from "../prisma-db";
import { redirect } from "next/navigation";


export type Error = {
 title: string,
 price: string,
 description: string,
};

export type FormState = {
  errors: Error
}

export async function updateProductHandler(id: number,prevState: FormState, formData: FormData){
  "use server";
  
    const title = formData.get("title") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const errors: Partial<Error> = {}

if(!title){
  errors.title = 'Title is required'
}
if(!price){
  errors.price = 'price is required'
}

if(!description){
  errors.description = 'Description is required'
}
if(Object.keys(errors).length > 0){
  return { errors }
}
await updateProduct(id,title, Number(price), description)
redirect('/product-db')

}
export async function DeleteProductHandler(id:number){
  await deleteProduct(id)
  revalidatePath('/product-db')
}