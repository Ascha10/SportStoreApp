// import React, { createContext, useEffect, useState } from 'react';
// import { getPants } from '../../Services/pantsService';
// export const pantsContext = createContext();

// export function PantsProvider({children}) {
//     const [pantsApi,setPantsApi] = useState([]);
    
//     useEffect(() => {
//         getPants().then((data) => setPantsApi(data))
//     },[])

//   return(
//      <pantsContext.Provider value={{pantsApi,setPantsApi}}>
//          {children}
//      </pantsContext.Provider>   
//   );
// }
