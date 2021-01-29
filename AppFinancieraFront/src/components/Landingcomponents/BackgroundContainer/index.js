import React, {useState} from 'react';
import apiUser from '../../../lib/apiUser';

 import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth'; 
/*  import ButtonMed from '../../../components/UIComponents/ButtonMed'; */
import TitleLanding from '../../UIComponents/TitleAndSubtitle-alignleft'
import Fish from '../../../asset/image/fish1.png'
import Modal from '../../UIComponents/Modal'
import styles from './index.module.css' 
import SignInForm from '../../UIComponents/SignInForm/index'

function Header(props) {
  
  const [showModal, toggleModal] = useState(false)
  const [userInfo, setUserInfo] = useState({userName:'', password:''})
  
  const buttons = [<button type="button" className="btn btn-danger" onClick={() => {const newUserResponse = apiUser.newUser(userInfo)
    if(newUserResponse) props.history.push('/'); handleCloseModal()}}>Cancelar.</button>, <button type="button" className="btn btn-success" onClick={() => {console.log(userInfo); handleCloseModal()}}>Registrate.</button> ]
  
  function handleCloseModal () {
   toggleModal(false); 
   setUserInfo({userName:'', password:''})
  }
  return (
    //1st page - log in 
    <div className={`d-flex `}>
      <div className={`d-flex flex-column `}> 
          <TitleLanding className=" col-sm-5 mt-0" titleBig=" ¿Estás listo para hacer realidad tus sueños?" titleMed="Aprende todo lo que necesitas sobre finanzas para emprender un negocio existo de una forma divertida." text="Regístrate y realiza el diágnostico financiero de tu negocio o idea ¡completamente gratis!" />
          <div className="d-flex justify-content-center"> 
            <ButtonFullWidth  className={`${styles.ButonSize}`}  Title="Jugar ahora!" handleClick={()=>{toggleModal(true)}} />
          </div>
        </div>
        <div className={`${styles.bgPrincipal} col-sm-7`} > 
            <img src={Fish}  alt="pez en movimiento" className={styles.fish}/>
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

export default Header;