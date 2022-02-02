import React,{useContext} from 'react';
import { storeContext } from '../../../Context/StoreProvider';

export default function Shoes() {
    const {shoesApi,setShoesApi} = useContext(storeContext);

  return(
       <section className='main'>
            {shoesApi.map((item) => {
                const {shoesId,model,company,price,imageData} = item;

              return(  <article className='productCards' key={shoesId}>
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
