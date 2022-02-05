import { basicUrl } from "./shoesService";

export const getShirts = async () => {
    try {
       return await fetch(`${basicUrl}/Shirts`)
       .then(res => res.json())
          
    } catch (error) {
       console.log("Error",error)
    }
   }
 