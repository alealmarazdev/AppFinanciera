import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import QuestionGame from '../components/QuestionGame/index'


function Content () {
 
     return (
      <div >
        <Navbar />
        <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta."/>
        <QuestionGame />
        <Chatbot />

      </div>
    )
}

export default Content;