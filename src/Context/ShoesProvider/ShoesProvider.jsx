// import React, { createContext, useEffect, useState } from 'react';
// import { getData } from '../../Services/shoesService';

// export const shoesContext = createContext();

// export function ShoesProvider({children}) {
//     const [shoesApi,setShoesApi] = useState([]);
    
//     useEffect(() => {
//         getData().then((data) => setShoesApi(data))
//     },[])

//   return(
//      <shoesContext.Provider value={{shoesApi,setShoesApi}}>
//          {children}
//      </shoesContext.Provider>   
//   );
// }
