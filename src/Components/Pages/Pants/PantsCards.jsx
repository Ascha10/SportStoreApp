import React,{useContext} from 'react';
import { storeContext} from '../../../Context/StoreProvider';
import PantCard from './PantCard';

export default function ShoeCards() {
    const {pantsApi,setPantsApi} = useContext(storeContext);

  return(
       <section className='main'>
            {pantsApi.map((pantItem) => 
               <PantCard pantInfo={pantItem} key={pantItem.clothId}/>
            )} 
       </section> 
  )
}
