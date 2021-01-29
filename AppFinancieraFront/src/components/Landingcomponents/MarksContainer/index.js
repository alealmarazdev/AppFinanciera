import React from 'react';

import Profile from '../../../asset/image/profile.svg'
import AvatarW from '../../../asset/image/avatarW.png'

import styles from '../MarksContainer/index.module.css'

function MarkContainer () {
    return (
  
       <div className={`${styles.color}  my-2 px-5 d-flex justify-content-around  align-items-center`}>
          <img src={Profile} className=" " alt="marcas compañantes"/>
          <img src={AvatarW} className="" alt="marcas compañantes"/>
          <img src={Profile} className="" alt="marcas compañantes"/>
          <img src={AvatarW} className="" alt="marcas compañantes"/>
          <img src={Profile} className="" alt="marcas compañantes"/>
           
        </div>
        
  
   )
}

export default MarkContainer