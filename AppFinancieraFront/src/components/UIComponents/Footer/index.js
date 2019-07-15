import React, { useState } from 'react';
/* import {Link} from 'react-router-dom' */
import SignInForm from '../../UIComponents/SignInForm/index'
import Modal from '../../UIComponents/Modal'
import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth';
import Instagram from '../../../asset/image/instagram.svg'
import Twitter from '../../../asset/image/twitter.svg'
import Fb from '../../../asset/image/fb.svg'

import styles from './index.module.css'

function Footer() {
  const [showModal, toggleModal] = useState(false)
  const [userInfo, setUserInfo] = useState({ userName: '', password: '' })

  const buttons = [<button type="button" className="btn btn-danger" onClick={() => { console.log(userInfo); handleCloseModal() }}>Cancelar.</button>, <button type="button" className="btn btn-success" onClick={() => { console.log(userInfo); handleCloseModal() }}>Registrate.</button>]

  function handleCloseModal() {
    toggleModal(false);
    setUserInfo({ userName: '', password: '' })
  }
  return (
    <div className={`card text-center ${styles.footer}`}>
      {/* <div class="card-header">
        Featured
      </div> */}
      <div className={`d-flex`}>
        <div className={`card-body col-sm-3`}>
          <h5 className={`card-title  ${styles.colorCyan}`}>Suscribete a nuestro Nesletter</h5>
          <p  className={`card-text  ${styles.colorCyan}`}>With supporting text below as a natural lead-in to additional content.</p>
          <ButtonFullWidth class="btn btn-primary" className={`${styles.ButonSize}`} Title="Jugar ahora!" handleClick={() => { toggleModal(true) }} />
        </div>
        <div className={`card-body col-sm-3`}>
          <p className={`card-text py-0 my-0 ${styles.colorCyan}`}>CONTACTO.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>SOBRE NOSOTROS.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>APRENDE.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>COLABORA.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>JUEGA.</p>
          <p className={`card-text py-0 my-0 ${styles.colorCyan}`}>FAQ.</p>
        </div>
        <div className={`card-body col-sm-3`}>
        <p class={`card-text py-0 ${styles.colorCyan}`}>POLITICA DE PRIVACIDAD.</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>TERMINOS Y CONDICIONES.</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>POLITICA DE DATOS.</p>
        </div>
        <div className={`card-body col-sm-3`}>
      
          <p class={`card-text py-0 ${styles.colorCyan}`}>Calle Tonala numero 10</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>Colonia Roma</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>Delegacion Benito Juarez</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>CDMX, C.P. 06700</p>
        </div>
      </div>

      <div className={`card-footer text-muted d-flex justify-content-between ${styles.bootomFooter}`}>
        <div className={`text-light`}>Equipo Dinamita</div>
        <div>
          <img src={Instagram} alt='instagram' className={`${styles.socialICon} mx-5`} />
          <img src={Twitter} alt='twitter' className={`${styles.socialICon} mx-5`} />
          <img src={Fb} alt='facebook' className={`${styles.socialICon} mx-5`} />
        </div>


      </div>
      <Modal isOpen={showModal} title='Registrate.' buttons={buttons} onClose={handleCloseModal}>
        <SignInForm valueEmail={userInfo.userName} onChangeEmail={(event) => {
          const userName = event.target.value
          setUserInfo({ ...userInfo, userName })
        }} valuePassword={userInfo.password} onChangePassword={(event) => {
          const password = event.target.value
          setUserInfo({ ...userInfo, password })
        }} />
      </Modal>
    </div>
  )
}

export default Footer
