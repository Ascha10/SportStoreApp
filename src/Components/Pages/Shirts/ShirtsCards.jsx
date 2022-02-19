import React,{useContext} from 'react';
import { shirtContext } from '../../../Context/ShirtsProvider/ShirtsProvider';
import Loading from '../../Layout/Loading/Loading';
import ShirtCard from './ShirtCard';

export default function ShoeCards() {
    const {state,dispatch} = useContext(shirtContext);

  return(

      state.loading ? <Loading/> :
       <section className='main'>
            {state.shirtsApi.map((shirtItem) => 
               <ShirtCard shirtInfo={shirtItem} key={shirtItem.clothId}/>
            )} 
       </section>
  )
}


