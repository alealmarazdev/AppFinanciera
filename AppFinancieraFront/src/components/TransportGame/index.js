import React from 'react';

import styles from './index.module.css'

import Truck from '../../asset/image/truck.png'
import  QuestionGame from '../QuestionGame/index'

function TransportGame () {
 
     return (
      <div className={styles.principalContainerLogo}>
        <h5>hola</h5>
        <h6>que pasa?</h6>
        <div className={styles.road}>
            <img src={Truck} alt="camion en movimiento" className={styles.truck}/> 
        </div>
        

        <QuestionGame />
        
      </div>
    )
}

export default TransportGame;