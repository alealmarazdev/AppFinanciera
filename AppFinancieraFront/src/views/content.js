import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import CardContainer from '../components/UIComponents/CardContainer'
import Footer from '../components/UIComponents/Footer'

function Content () {
 
     return (
      <div >
       <Navbar /> 
        <TitleGames title="¿QUÉ QUIERES APRENDER HOY?" subtitle="Selecciona el tema que mas te interese."/>
       <CardContainer/> 
        <Footer />
        <Chatbot /> 
        
      </div>
    )
}

export default Content;