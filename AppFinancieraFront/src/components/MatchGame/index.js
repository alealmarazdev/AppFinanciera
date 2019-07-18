import React from 'react';
import styles from './index.module.css';
import Fish from '../../asset/image/fish1.png'
function MatchGame () {
 
     return (
      <div className="mx-auto d-table my-5">
          <h4 className="mb-3">¿Qué es un ingreso?</h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input " />
                </div>
            </div>
            <label >Es todo objeto que ingresa al haber patrimonial</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Es todo objeto que ingresa al haber patrimonial</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Es todo objeto que ingresa al haber patrimonial</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Es todo objeto que ingresa al haber patrimonial</label>
            </div>
        
            <div className={`${styles.bgPrincipal} col-sm-7`} > 
                <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
            </div>
            <div className={`${styles.bgPrincipal} col-sm-7`} > 
                <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
            </div>
            <div className={`${styles.bgPrincipal} col-sm-7`} > 
                <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
            </div>
            <div className={`${styles.bgPrincipal} col-sm-7`} > 
                <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
            </div>

      </div>
    )
}

export default MatchGame;
