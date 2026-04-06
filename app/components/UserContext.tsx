'use client'

import { Children, createContext, useContext } from "react"


// dummy data
type User={
  name: string,
  email:string,
  age:number
}

const userData={
  name :'ABCD',
  email:'abc@gmail.com',
  age:23
}
const RootContext= createContext<User>(userData)  

export const RootProvider = ({children} : {children: React.ReactNode}) =>{
return(
    <RootContext.Provider value={userData}>
        {children}
    </RootContext.Provider>
)
}


export const useRootContext = () => useContext(RootContext)