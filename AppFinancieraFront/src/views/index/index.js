import React, {useState} from 'react';

import Info from '../../components/Landingcomponents/Info/index';
import LogoSpace from '../../components/UIComponents/Logospace/index'
import ButtonMed from '../../components/UIComponents/ButtonMed/index'
import MarkContainer from '../../components/Landingcomponents/MarksContainer/index'
import CardContainerNoImage from '../../components/UIComponents/CardContainerNoImage'
import Card from '../../components/UIComponents/Card/index'
import ImageContainer from '../../components/UIComponents/ImageContainer/index'
import Footer from '../../components/UIComponents/Footer/index'
import Modal from '../../components/UIComponents/Modal/index'
import LogInForm from '../../components/UIComponents/LogInForm/index'

import TitleLanding from '../../components/UIComponents/TitleAndSubtitle-alignleft/index'
import ButtonFullWidth from '../../components/UIComponents/ButtonFullWidth/index'

import Girl from '../../asset/image/animation/meditationGirl.svg'


import styles from '../index/index.module.css'

import Profile from '../../asset/image/profile.svg'
import AvatarW from '../../asset/image/avatarW.png'



function Index() {

const [showModal, toggleModal] = useState(false)
const [userInfo, setUserInfo] = useState({userName:'', password:''})

const buttons = [<button type="button" className="btn btn-danger" onClick={() => {console.log(userInfo); handleCloseModal()}}>Cancelar.</button>, <button type="button" className="btn btn-success" onClick={() => {console.log(userInfo); handleCloseModal()}}>Iniciar sesion.</button> ]

function handleCloseModal () {
 toggleModal(false); 
 setUserInfo({userName:'', password:''})
}

  return (
    //1st page - log in 
    <div> 
    <div className="row d-flex m-0 p-0 w-100">
        <div className={`${styles.logo} col-6`}>
              <LogoSpace className={`${styles.pru}`}/>
              <div className={`d-flex flex-column justify-content-around`}> 
                 <TitleLanding className="col-sm-5" titleBig="Aprende finanzas de la forma más divertida" titleMed="Domina los conceptos escenciales, adminístrate, invierte o lleva las finanzas de tu propio negocio." />
                 <ButtonFullWidth Title="COMIENZA AHORA" handleClick={()=>{toggleModal(true)}} /> 
                 </div>  
             </div>
          <div className={`${styles.bgimage} content-fluid col-6 m-0`}>
              <div className={`${styles.Buttonmed}`}>
              <ButtonMed Title="Log-In" handleClick={()=>{toggleModal(true)}}/>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              <img src={Girl}  alt="Chica" className={styles.girl}/>
              </div>
          </div>
     </div>
     <MarkContainer className= "mt-0" />
     <div className= {`${styles.Bgquote} col-12 content-fluid`}></div>
     <CardContainerNoImage />
     <div class="row p-0 my-5">        
          <div class="col-sm-6 mb-5 ">
              <Card to="/theme/Word/One" title='Conceptos básicos' subtitle="Conoce los elementos fundamentales para aprender de finanzas" image={Profile}/>    
          </div> 
          <div class="col-sm-6 mb-5 ">
              <Card to="/theme/Word/Two" title='Modelo de negocio' subtitle='Aprende a desarrollar tu idea de negocio.' image={AvatarW}/>
          </div>
        </div>
        <ImageContainer />
        <Footer/>
        <Modal isOpen={showModal} title='Inicia sesion.' buttons={buttons} onClose={handleCloseModal}>
          <LogInForm valueEmail={userInfo.userName} onChangeEmail={(event)=>{
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

export default Index;