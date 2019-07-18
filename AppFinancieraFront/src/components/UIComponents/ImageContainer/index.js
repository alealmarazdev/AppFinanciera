import React, {useState} from 'react';
import apiUser from '../../../lib/apiUser';

import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; 
import Modal from '../Modal'
import SignInForm from '../../UIComponents/SignInForm/index'

import styles from './index.module.css' 

function ImageContainer(props) {

  const [showModal, toggleModal] = useState(false)

  function handleUserInfo (userInfo) {
    apiUser.newUser({...userInfo})
    props.history.push('/curso')
}
  
  return (
  
    <div className={`${styles.bienvenida} `}>
        <div className={`${styles.estrellaFugaz} `}> </div>
        <div className="d-flex flex-column "> 
            <h6 className={`text-center`}>Unete a nuestra comunidad y domina las finanzas</h6>
            <div className="d-flex justify-content-center"> 
            <ButtonFullWidth  className={`${styles.ButonSize} `}  Title="¡Comienza ahora!" handleClick={()=>{toggleModal(true)}}/>
            </div>
        </div>
        <Modal isOpen={showModal} title='Registrate.' >
        <SignInForm handleUserInfo={handleUserInfo} handleCloseModal={()=>{toggleModal(false)}} />
        </Modal>
    </div>
         
  )
}

export default ImageContainer;