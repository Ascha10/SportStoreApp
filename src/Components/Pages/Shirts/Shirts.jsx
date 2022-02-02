import React,{useContext} from 'react';
import { storeContext } from '../../../Context/StoreProvider';

export default function Shirts() {
    const {shirtsApi,setShirtsApi} = useContext(storeContext);

  return(
       <section className='main'>
            {shirtsApi.map((item) => {
                const {clothesId,model,company,price,imageData} = item;

              return(  <article className='productCards' key={clothesId}>
                            <img src={imageData}/>
                            <h1>company : {company}</h1>
                            <h2>model : {model}</h2>
                            <h4>Price : {price}</h4>
                       </article>
             )  
            })} 

       </section> 
  )    
}
