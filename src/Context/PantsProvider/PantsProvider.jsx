import React, { createContext, useEffect, useState } from 'react';
import { getPants } from '../../Services/pantsService';
export const pantsContext = createContext();

export function PantsProvider({children}) {
    const [pantsApi,setPantsApi] = useState([]);    
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getPants()
        .then((data) => setPantsApi(data))
        .finally(() => setLoading(false))
    },[])

  return(
     <pantsContext.Provider value={{pantsApi,setPantsApi}}>
         {children}
     </pantsContext.Provider>   
  );
}
