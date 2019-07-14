import React from 'react';

import Header from '../components/Landingcomponents/BackgroundContainer/index';
import Info from '../components/Landingcomponents/Info/index';
import LogoSpace from '../components/UIComponents/Logospace'
import ButtonMed from '../components/UIComponents/ButtonMed'
import MarkContainer from '../components/Landingcomponents/MarksContainer/index'
import CardContainerNoImage from '../components/UIComponents/CardContainerNoImage'
import Card from '../components/UIComponents/Card/index'
import ImageContainer from '../components/UIComponents/ImageContainer'
import Footer from '../components/UIComponents/Footer/index'

import Profile from '../asset/image/profile.svg'
import AvatarW from '../asset/image/avatarW.png'



function Index() {

  return (
    //1st page - log in 
    <div> 
      <div className="row d-flex m-0 p-0 w-100">
            <div className="col-6">
                <LogoSpace />
            </div>
            <div className="col-6 text-right">
                <ButtonMed Title="Log-In"/>
            </div>
        </div>   
        <Header/>
        <Info />
        <CardContainerNoImage />
        <MarkContainer />
        <div class="row m-5">        
          <div class="col-sm-6 mb-5 ">
              <Card to="/theme/Word/One" title='Conceptos básicos' subtitle="Conoce los elementos fundamentales para aprender de finanzas" image={Profile}/>    
          </div> 
          <div class="col-sm-6 mb-5 ">
              <Card to="/theme/Word/Two" title='Modelo de negocio' subtitle='Aprende a desarrollar tu idea de negocio.' image={AvatarW}/>
          </div>
        </div>
        <ImageContainer />
        <Footer/>
    </div>
  )
}

export default Index;