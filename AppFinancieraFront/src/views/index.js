import React from 'react';

import LogoSpace from '../components/UIComponents/Logospace';
import TitleLanding from '../components/UIComponents/TitleAndSubtitle-alignleft';
import ButtonFullWidth from '../components/UIComponents/ButtonFullWidth';
import ButtonMed from '../components/UIComponents/ButtonMed';



function Index() {

  return (
    //1st page - log in 
      <div className="container">
        <div className="row d-flex">
          <div className="col-6">
            <LogoSpace />
            <TitleLanding className="mt-5" titleBig="Aprende finanzas" titleMed="de la forma más divertida." text="Domina los conceptos básicos, adminístrate, invierte o lleva las finanzas de tu proprio negocio"/>
            <ButtonFullWidth Title= "COMIENZA AHORA"/>
          </div>
          <div className="col-6 text-right">
            <ButtonMed Title="Log-In"/>
          </div>
         </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <p>KOEPFJ</p>
          </div>
        </div>
      </div>
  )
}

export default Index;