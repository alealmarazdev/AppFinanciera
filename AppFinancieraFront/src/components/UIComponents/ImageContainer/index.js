import React from 'react';


 import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; 


import styles from './index.module.css' 

function ImageContainer() {

  return (
    //1st page - log in 
    <div className={`${styles.bienvenida} `}>
        <div className={`${styles.estrellaFugaz} `}> </div>
        <div className="d-flex flex-column "> 
            <h6 className={`text-center`}>Unete a nuestra comunidad y domina las finanzas</h6>
            <div className="d-flex justify-content-center"> 
            <ButtonFullWidth  className={`${styles.ButonSize} `}  Title="¡Comienza ahora!" />
            </div>
        </div>
    </div>
         
  )
}

export default ImageContainer;