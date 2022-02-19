import React,{useContext} from 'react';
import { pantsContext } from '../../../Context/PantsProvider/PantsProvider';
import Loading from '../../Layout/Loading/Loading';
import PantCard from './PantCard';

export default function ShoeCards() {
    const {state,dispatch} = useContext(pantsContext);
    console.log(state);

  return(
     state.loading ? <Loading/> :
       <section className='main'>
            {state.pantsApi.map((pantItem) => 
               <PantCard pantInfo={pantItem} key={pantItem.clothId}/>
            )} 
       </section> 
  )
}
