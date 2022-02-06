import React,{useContext} from 'react';
import { shirtContext } from '../../../Context/ShirtsProvider/ShirtsProvider';
import Loading from '../../Features/Loading/Loading';
import ShirtCard from './ShirtCard';

export default function ShoeCards() {
    const {shirtsApi,setShirtsApi,loading} = useContext(shirtContext);

  return(
     loading ? <Loading/> :
       <section className='main'>
            {shirtsApi.map((shirtItem) => 
               <ShirtCard shirtInfo={shirtItem} key={shirtItem.clothId}/>
            )} 
       </section>
  )
}

