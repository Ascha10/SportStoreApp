import React, { createContext, useEffect, useState } from 'react';
import { getShoes } from '../../Services/shoesService';

export const shoesContext = createContext();

export function ShoesProvider({children}) {

    const [shoesApi,setShoesApi] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getShoes()
        .then((data) => setShoesApi(data))
        .finally(() => setLoading(false))
    },[])

  return(
     <shoesContext.Provider value={{shoesApi,setShoesApi,loading}}>
         {children}
     </shoesContext.Provider>   
  );
}
