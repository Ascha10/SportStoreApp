import React from 'react';
import {StoreProvider } from '../../../Context/StoreProvider';
import PantsCards from './PantsCards';

export default function Pants() {

  return(
     <StoreProvider>
          <PantsCards/>
     </StoreProvider>

  )
}
