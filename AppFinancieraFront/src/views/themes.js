import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import ContentVideo from '../components/UIComponents/ContentVideo/index'
import ContentWrite from '../components/UIComponents/ContentWrite/index'

const contents = {
  'themeOne': {
    'title': 'Modelo de negocio',
    'subtitle':'conoce...',
    'content': [<ContentVideo />],
    'direccion':'gameOne'
  },
  'themeTwo': {
    'title': 'Modelo de negocio',
    'subtitle':'conoce...',
    'content': [<ContentWrite />],
    'direccion':'gameOne'

  },
};

function Theme (props) {
  console.log(props.match)
  const theme = props.match.params.id;
  const content = contents[theme];

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