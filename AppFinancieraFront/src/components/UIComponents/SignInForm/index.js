import React, { useState }  from 'react';
import {Link} from 'react-router-dom'

import UserSignIn from '../../../asset/image/userSignIn.svg'
import styles from './index.module.css';

function SignInForm(props) {
    const { valueEmail, valuePassword } = props;
      const [state, setState] =useState({ valueEmail, valuePassword})

  function onChange(event) {
    const { id, value } = event.target;

    setState({ ...state, [id]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    props.onSubmit(state);
  }
    return (
        <div>
            <img src={UserSignIn} alt='Inicio de sesion' className={`${styles.userImgSing}`} />
        <form className={`d-flex flex-column`} onSubmit={onSubmit}>
       
            <div class="form-group">
                <label >Ingresa tu correo electronico.
                <input type="email" className={`form-control ${styles.formControl}`} aria-describedby="emailHelp" placeholder="Ingresa tu correo electronico." value={state.targetvalueEmail} onChange={onChange} />
                </label>
                <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo electronico con nadie.</small>
            </div>
            <div class="form-group">
                <label >Ingresa tu contraseña.
                <input type="password" className={`form-control ${styles.formControl}`} placeholder="Ingresa tu contraseña." value={state.valuePassword} onChange={onChange} />
                </label>
            </div>
            
            <div class={`form-group form-check d-flex flex-column`}>
                <div> 
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Mostrar contraseña.</label>
                </div>
                <Link className=" mt-1"to="/">Recuperar contraseña.</Link>
            </div>

        </form> 
        </div>
    )
}
export default SignInForm;

