import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import ContainerBlog from '../components/Blogcomponents/containerBlog'


function Blog () {
     return (
      <div >
        <Navbar />
        <TitleGames title="BLOG Y RECURSOS" subtitle="¡Comparte con la comunidad y lee articulos de interes!"/>
        <ContainerBlog />
        <Chatbot />
        </div>
    )
}

export default Blog;