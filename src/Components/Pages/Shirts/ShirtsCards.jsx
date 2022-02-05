import React,{useContext} from 'react';
import { storeContext} from '../../../Context/StoreProvider';
import ShirtCard from './ShirtCard';

export default function ShoeCards() {
    const {shirtsApi,setShirtsApi} = useContext(storeContext);

  return(
       <section className='main'>
            {shirtsApi.map((shirtItem) => 
               <ShirtCard shirtInfo={shirtItem} key={shirtItem.clothId}/>
            )} 
       </section> 
  )
}

