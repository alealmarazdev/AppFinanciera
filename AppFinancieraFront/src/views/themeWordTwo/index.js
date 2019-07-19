import React from 'react';
/* import FlipCard from '@kennethormandy/react-flipcard'
 import '@kennethormandy/react-flipcard/dist/Flipcard.css' */
import {Link} from 'react-router-dom'

import TitleGames from '../../components/UIComponents/TitleAndSubtitle'
import Navbar from '../../components/UIComponents/Navbar'
import Chatbot from '../../components/UIComponents/Chatbot'
import Crown from '../../asset/image/Icons/crown.svg'
/* import Lock from '../../asset/image/Icons/lock.svg' */
/* import ButtonLink from '../../components/UIComponents/ButtonLink/index' */

import styles from './index.module.css'

function ThemeWordTwo () {
     return (
      <div >
        <Navbar />
        <TitleGames title="Modelos de Negocio" subtitle="¡Los fundamentos de un buen plan!"/>
        <div className={styles.bgGame}> </div>

        <Link className={styles.mapeado} to="/theme/themeOne"> 
          <h4 className="mb-0 text-center">¿Qué son?</h4>
          {/* <FlipCard flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={false} type="revolving-door"
        >   */}
          <img src={Crown} alt="nivel"/>
          {/* <img src={Lock}/> */}
          {/* </FlipCard>   */}
        </Link>

        <Link className={styles.mapeado1} to="/theme/themeOne">
          <h4 className="mb-0 text-center">Lineas de acción</h4>
          <img src={Crown} alt="nivel"/>
        </Link>  
        <div className={styles.bgContinue}> </div>

        <Link className={styles.mapeado2} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Validación</h4>
          <img src={Crown} alt="nivel"/>
        </Link>
      
        <Link className={styles.mapeado3} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Las 3 D's</h4>
          <img src={Crown} alt="nivel"/>
        </Link>
        <Link className={styles.mapeado4} to="/curso">
        <h4 className="mb-0 text-center">MVP</h4>
          <img src={Crown} alt="nivel"/>
        </Link>
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

export default ThemeWordTwo;