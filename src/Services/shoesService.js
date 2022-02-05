export const basicUrl = 'https://localhost:44307/api/';

export const getShoes = async () => {
   try {
      return await fetch(`${basicUrl}/Shoes`)
      .then(res => res.json())  

   } catch (error) {
      console.log("Error",error)
   }
  }


  