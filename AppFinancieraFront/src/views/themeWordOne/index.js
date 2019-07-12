import React from 'react';
/* import FlipCard from '@kennethormandy/react-flipcard'
 import '@kennethormandy/react-flipcard/dist/Flipcard.css' */

import TitleGames from '../../components/UIComponents/TitleAndSubtitle'
import Navbar from '../../components/UIComponents/Navbar'
import Chatbot from '../../components/UIComponents/Chatbot'
import Crown from '../../asset/image/Icons/crown.svg'
/* import Lock from '../../asset/image/Icons/lock.svg' */

import styles from './index.module.css'

function ThemeWordOne () {
     return (
      <div >
        <Navbar />
        <TitleGames title="Conceptos básicos" subtitle="Aprende las bases para iniciar"/>
        <div className={styles.bgGame}> </div>
        <div className={styles.mapeado}> 
          <h4 className="mb-0 text-center">Emprender</h4>
          {/* <FlipCard flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={false} type="revolving-door"
        >   */}
          <img src={Crown} alt="nivel"/>
          {/* <img src={Lock}/> */}
          {/* </FlipCard>   */}
        </div>
        <div className={styles.mapeado1}>
          <h4 className="mb-0 text-center">Personas ante la ley.</h4>
          <img src={Crown} alt="nivel"/>
        </div>  <div className={styles.bgContinue}> </div>
        <div className={styles.mapeado2}>
        <h4 className="mb-0 text-center">Fines de las sociedades.</h4>
          <img src={Crown} alt="nivel"/>
        </div>
      
        <div className={styles.mapeado3}>
        <h4 className="mb-0 text-center">Registros.</h4>
          <img src={Crown} alt="nivel"/>
        </div>
       
        {/* <div className={styles.mapeado6}>
          
        </div>
        <div className={styles.mapeado7}>
          <img src={Lock}/>
        </div>
        <div className={styles.mapeado8}>
          <img src={Lock}/>
        </div> */}
        <Chatbot />
        
      </div>
    )
}

export default ThemeWordOne;