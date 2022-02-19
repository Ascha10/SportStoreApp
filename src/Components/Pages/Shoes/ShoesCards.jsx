import React,{useContext} from 'react';
import { shoesContext } from '../../../Context/ShoesProvider/ShoesProvider';
import ShoeCard from './ShoeCard';
import Loading from '../../Layout/Loading/Loading'

export default function ShoeCards() {
    const {state,dispatch} = useContext(shoesContext);

  return(
    state.loading ? <Loading/> :
       <section className='main'>
            {state.shoesApi.map((shoeItem) => 
               <ShoeCard ShoeInfo={shoeItem} key={shoeItem.shoesId}/>
            )} 
       </section> 
  )
}
