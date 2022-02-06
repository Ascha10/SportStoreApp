import React,{useContext} from 'react';
import { pantsContext } from '../../../Context/PantsProvider/PantsProvider';
import Loading from '../../Features/Loading/Loading';
import PantCard from './PantCard';

export default function ShoeCards() {
    const {pantsApi,setPantsApi,loading} = useContext(pantsContext);

  return(
     loading ? <Loading/> :
       <section className='main'>
            {pantsApi.map((pantItem) => 
               <PantCard pantInfo={pantItem} key={pantItem.clothId}/>
            )} 
       </section> 
  )
}
