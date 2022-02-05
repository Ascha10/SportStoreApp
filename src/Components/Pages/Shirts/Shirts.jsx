import React,{useContext} from 'react';
import { StoreProvider } from '../../../Context/StoreProvider';
import ShirtsCards from './ShirtsCards';

export default function Shirts() {

  return(
     <StoreProvider>
          <ShirtsCards/>
     </StoreProvider>
  )    
}
