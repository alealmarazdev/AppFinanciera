import React, {useState} from 'react';


 import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; 
 import Modal from '../Modal'
 import SignInForm from '../../UIComponents/SignInForm/index'

import styles from './index.module.css' 

function ImageContainer() {
  const [showModal, toggleModal] = useState(false)
  const [userInfo, setUserInfo] = useState({userName:'', password:''})
  
  const buttons = [<button type="button" className="btn btn-danger" onClick={() => {console.log(userInfo); handleCloseModal()}}>Cancelar.</button>, <button type="button" className="btn btn-success" onClick={() => {console.log(userInfo); handleCloseModal()}}>Registrate.</button> ]
  
  function handleCloseModal () {
   toggleModal(false); 
   setUserInfo({userName:'', password:''})
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
        <Modal isOpen={showModal} title='Registrate.' buttons={buttons} onClose={handleCloseModal}>
        <SignInForm valueEmail={userInfo.userName} onChangeEmail={(event)=>{
                  const userName = event.target.value
                  setUserInfo({...userInfo, userName})
                }} valuePassword={userInfo.password} onChangePassword={(event)=>{
                  const password = event.target.value
                  setUserInfo({...userInfo, password})
                }} />
        </Modal>
    </div>
         
  )
}

export default ImageContainer;