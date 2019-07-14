import React from 'react';


 import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; 
/*  import ButtonMed from '../../../components/UIComponents/ButtonMed'; */
import TitleLanding from '../../UIComponents/TitleAndSubtitle-alignleft'
import Fish from '../../../asset/image/fish1.png'

import styles from './index.module.css' 

function Header() {

  return (
    //1st page - log in 
    <div className={`d-flex `}>
      <div className={`d-flex flex-column`}> 
          <TitleLanding className="col-sm-5 " titleBig=" ¿Estás listo para hacer realidad tus sueños?" titleMed="Aprende todo lo que necesitas sobre finanzas para emprender un negocio existo de una forma divertida." text="Regístrate y realiza el diágnostico financiero de tu negocio o idea ¡completamente gratis!" />
          <div className="d-flex justify-content-center"> 
            <ButtonFullWidth  className={`${styles.ButonSize}`}  Title="Jugar ahora!" />
          </div>
        </div>
        <div className={`${styles.bgPrincipal} col-sm-7`} > 
            <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
        </div>
    </div>
         
  )
}

export default Header;