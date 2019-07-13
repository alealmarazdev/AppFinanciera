import React from 'react';

import Card from '../Card'



function CardContainer () {
    return (
     <div >
       <div class="row m-5">
          
           <Card to="/theme/themeOne" title="BLOG Y RECURSOS" subtitle="¡Comparte con la comunidad y lee articulos de interes!" />
           <Card to="/theme/themeTwo" title="BLOG Y RECURSOS" subtitle="¡Comparte con la comunidad y lee articulos de interes!" />
        </div>
        
     </div>
   )
}

export default CardContainer
