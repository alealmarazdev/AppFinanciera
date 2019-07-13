import React from 'react';

import styles from './index.module.css'
import Profile from '../../../asset/image/profile.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Card (props) {
    const {
        title,
        subtitle,
        to,
    } = props;
    return (
    <div class="col-sm-3">
        <div class="card border border-light">
            <div class="card-body ">
                <Link to={to} className="d-flex align-items-center flex-column">  
                <h5 class={`${styles.h5} card-title`}>{title}</h5>
                <img src={Profile} class="card-img-top w-25" alt="perfil"/>
                <p className="text-justify card-text">{subtitle}</p>
                </Link>
            </div>
        </div>
    </div>
   )
}

export default Card



