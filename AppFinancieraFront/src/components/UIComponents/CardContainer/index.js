import React from 'react';

import Card from '../Card'

import Profile from '../../../asset/image/profile.svg'
import AvatarW from '../../../asset/image/avatarW.png'

function CardContainer () {
    return (
     <div >
       <div class="row m-5">
          
           <Card to="/theme/Word/One" title='Conceptos básicos' subtitle="Conoce los elementos fundamentales para aprender de finanzas" image={Profile}/>    
           <Card to="/theme/Word/Two" title='Modelo de negocio' subtitle='Aprende a desarrollar tu idea de negocio.' image={AvatarW}/>
           <Card to="/theme/Word/Three" title='Administra tus finanzas' subtitle='Obten los conocimientos básicos para tener finanzas saludabless' image={Profile}/>
           <Card to="/theme/Word/Four" title='Estudio de mercado' subtitle='Reconoce a tus clientes.' image={AvatarW}/>
           <Card to="/theme/Word/Five" title='¿Socios, Inversionista?' subtitle='Reconoce que modelo se adapta mas a tus necesidades.' image={AvatarW}/>
           <Card to="/theme/Word/Six" title='Mas alla de la idea.' subtitle='Toma de decisiones.' image={Profile}/>
           <Card to="/theme/Word/Seven" title='Capital' subtitle='Aprende los diferentes activos de una empresa' image={AvatarW}/>
           <Card to="/theme/Word/Eight" title='Prueba tu idea' subtitle='Entenderas la importacia de hacer pruebas de tu idea.' image={Profile}/>
           <Card to="/theme/Word/Nine" title='¿Deuda tu mejor ayuda?' subtitle='Aprende el significado de deuda y como puede ayudarte.' image={Profile}/>
           <Card to="/theme/Word/Ten" title='Impuestos' subtitle='Conoce más sobre impuestos' image={AvatarW}/>
           <Card to="/theme/Word/Eleven" title='Salud financiera de tu empresa.' subtitle='Diferencia de los tipos gastos que tienes en tu empresa.' image={Profile}/>
           <Card to="/theme/Word/Twelve" title='Bancos.' subtitle='Aprende sobre tasas de interes, rendimientos, y más' image={AvatarW}/>
           
           
        </div>
        
     </div>
   )
}

export default CardContainer
