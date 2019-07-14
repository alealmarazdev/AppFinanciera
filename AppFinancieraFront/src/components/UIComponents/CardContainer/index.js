import React from 'react';

import Card from '../Card'



function CardContainer () {
    return (
     <div >
       <div class="row m-5">
          
           <Card to="/theme/themeOne" title='Conceptos básicos' subtitle="Conoce los elementos fundamentales para aprender de finanzas" />    
           <Card to="/theme/themeTwo" title='Modelo de negocio' subtitle='Aprende a desarrollar tu idea de negocio.' />S
        </div>
        
     </div>
   )
}

export default CardContainer
