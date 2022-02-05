import React from 'react';
import {StoreProvider } from '../../../Context/StoreProvider';
import ShoeCards from './ShoesCards';

export default function Shoes() {

  return(
     <StoreProvider>
          <ShoeCards/>
     </StoreProvider>
  )
}
