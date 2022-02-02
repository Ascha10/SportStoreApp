import { basicUrl } from "./shoesService";

export const getPants = async () => {
    try {
 
       return await fetch(`${basicUrl}/Pants`)
       .then(res => res.json())
       .catch(error => console.log("Error",error));
       
    } catch (error) {
       console.log("Error",error)
    }
   }
 