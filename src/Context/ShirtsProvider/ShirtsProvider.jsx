import React, { createContext, useEffect, useState } from 'react';
import { getShirts } from '../../Services/shirtsService';
export const shirtContext = createContext();

export function ShirtsProvider({children}) {

    const [shirtsApi,setShirtsApi] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getShirts()
        .then((data) => setShirtsApi(data))
        .finally(() => setLoading(false))
    },[])


  return(
     <shirtContext.Provider value={{shirtsApi,setShirtsApi,loading}}>
         {children}
     </shirtContext.Provider>   
  );
}
