import React from 'react';


/* import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; */
/* import ButtonMed from '../../../components/UIComponents/ButtonMed';*/
import TitleLanding from '../../UIComponents/TitleAndSubtitle-alignleft'
import Bubble from '../../../asset/image/bubble.png'

import styles from './index.module.css' 

function Info() {

  return (
    //1st page - log in 
    <div className={`d-flex `}>
       <div className={` col-sm-2`} > 
            <img src={Bubble}  alt="pez en movimiento" className={styles.bubble}/>
        </div>
        <TitleLanding className="col-sm-8 " titleBig=" ¿Estás listo para hacer realidad tus sueños?" titleMed="Aprende todo lo que necesitas sobre finanzas para emprender un negocio existo de una forma divertida." text="Regístrate y realiza el diágnostico financiero de tu negocio o idea ¡completamente gratis!" />
        <div className={` col-sm-2`} > 
            <img src={Bubble}  alt="pez en movimiento" className={styles.bubble}/>
        </div>
    </div>
         
  )
}

export default Info;