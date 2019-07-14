import React from 'react';

import styles from './index.module.css'

import { Link } from 'react-router-dom/cjs/react-router-dom';


function Card (props) {
    const {
        title,
        subtitle,
        to,
        image
    } = props;
    return (
    <div class="col-sm-3 mb-5 ">
        <div class={`card border border-light ${styles.borderCard}`}>
            <div class="card-body ">
                <Link to={to} className="d-flex align-items-center flex-column">  
                <h5 class={`${styles.h5} card-title text-center`}>{title}</h5>
                <img src={image} class="card-img-top w-25" alt="perfil"/>
                <p className="text-justify card-text px-2 text-center">{subtitle}</p>
                </Link>
            </div>
        </div>
    </div>
   )
}

export default Card



