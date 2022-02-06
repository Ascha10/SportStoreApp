// import React, { createContext, useEffect, useState } from 'react';
// import { getShirts } from '../Services/shirtsService';
// import { getPants } from '../Services/pantsService';
// import { getShoes } from '../Services/shoesService';


// export const storeContext = createContext();

// export function StoreProvider({children}) {
//     const [shirtsApi,setShirtsApi] = useState([]);
//     const [loading,setLoading] = useState(false);
//     const [error,setError] = useState(false);
    
//     useEffect(() => {
//         setLoading(true);
//         getShirts()
//         .then((data) => setShirtsApi(data))
//         .finally(() => setLoading(false))
//     },[])

//     const [shoesApi,setShoesApi] = useState([]);
    
//     useEffect(() => {
//         getShoes().then((data) => setShoesApi(data))
//     },[])

//     const [pantsApi,setPantsApi] = useState([]);
    
//     useEffect(() => {
//         getPants().then((data) => setPantsApi(data))
//     },[])

//   return(
//      <storeContext.Provider value={{shirtsApi,setShirtsApi,loading,pantsApi,setPantsApi,shoesApi,setShoesApi}}>
//          {children}
//      </storeContext.Provider>   
//   );
// }


