import React,{useState} from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import QuestionGame from '../components/QuestionGame/index'
import Modal from '../components/UIComponents/Modal'
import ButtonMed from '../components/UIComponents/ButtonMed'

function Game2 () {
 
const [showModal, toggleModal] = useState(false)
const [userInfo, setUserInfo] = useState({userName:'', password:''})

const buttons = <button type="button" className="btn btn-primary" onClick={() => {console.log(userInfo); handleCloseModal()}}>Submit</button>

function handleCloseModal () {
 toggleModal(false); 
 setUserInfo({userName:'', password:''})
}
     return (
      <div >
        <Navbar />
        <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta."/>
        <QuestionGame />
        <div className="col-6 text-right">
                <ButtonMed Title="Log-In" handleClick={()=>{toggleModal(true)}}/>
            </div>
        <Chatbot />
        <Modal isOpen={showModal} title='Inicia sesion.' buttons={buttons} onClose={handleCloseModal}>
            <form>
              <div class="form-group">
                <label >Email address
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={userInfo.userName}
                onChange={(event)=>{
                  const userName = event.target.value
                  setUserInfo({...userInfo, userName})
                }}/>
                </label>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label >Password
                <input type="password" class="form-control" placeholder="Password" value={userInfo.password}
                onChange={(event)=>{
                  const password = event.target.value
                  setUserInfo({...userInfo, password})
                }}/>
                </label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              
            </form>
        </Modal>
      </div>
    )
}

export default Game2;