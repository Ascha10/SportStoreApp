import React,{useContext} from 'react';
import { shoesContext } from '../../../Context/ShoesProvider/ShoesProvider';
import ShoeCard from './ShoeCard';
import Loading from '../../Features/Loading/Loading'

export default function ShoeCards() {
    const {shoesApi,setShoesApi,loading} = useContext(shoesContext);

  return(
     loading ? <Loading/> :
       <section className='main'>
            {shoesApi.map((shoeItem) => 
               <ShoeCard ShoeInfo={shoeItem} key={shoeItem.shoesId}/>
            )} 
       </section> 
  )
}
