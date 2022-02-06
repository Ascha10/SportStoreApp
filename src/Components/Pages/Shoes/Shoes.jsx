import React from 'react';
import { ShoesProvider } from '../../../Context/ShoesProvider/ShoesProvider';
import ShoeCards from './ShoesCards';

export default function Shoes() {

  return(
     <ShoesProvider>
          <ShoeCards/>
     </ShoesProvider>
  )
}
