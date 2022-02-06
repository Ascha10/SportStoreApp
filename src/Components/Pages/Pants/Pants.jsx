import React from 'react';
import { PantsProvider } from '../../../Context/PantsProvider/PantsProvider';
import PantsCards from './PantsCards';

export default function Pants() {

  return(
     <PantsProvider>
          <PantsCards/>
     </PantsProvider>

  )
}
