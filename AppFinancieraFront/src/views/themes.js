import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import ContentVideo from '../components/UIComponents/ContentVideo/index'
import ContentWrite from '../components/UIComponents/ContentWrite/index'

const content = {
  'temaOne': {
    'title': 'Modelo de negocio',
    'subtitle':'conoce...',
    'content': [<ContentVideo />],
    'direccion':'gameOne'
  },
  'temaTwo': {
    'title': 'Modelo de negocio',
    'subtitle':'conoce...',
    'content': [<ContentWrite />],
    'direccion':'gameOne'
  },
};

function Theme ({params}) {
  const theme = params.number;
  const content = content[theme];

     return (
      <div >
        <Navbar />
        <TitleGames title={content.title} subtitle={content.subtitle}/>
           {content.content}
        <Chatbot />
        </div>
    )
}

export default Theme;