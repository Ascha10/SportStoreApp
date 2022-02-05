import React,{useContext} from 'react';
import { storeContext} from '../../../Context/StoreProvider';
import ShoeCard from './ShoeCard';

export default function ShoeCards() {
    const {shoesApi,setShoesApi} = useContext(storeContext);

  return(
       <section className='main'>
            {shoesApi.map((shoeItem) => 
               <ShoeCard ShoeInfo={shoeItem} key={shoeItem.shoesId}/>
            )} 
       </section> 
  )
}
