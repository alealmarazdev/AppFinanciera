import React from 'react'
import styles from './index.module.css';
import NavbarList from '../NavbarList'


function Navbar(){

    return (
        <nav class={`${styles.navFondo} navbar navbar-expand-lg navbar-light bg-light mb-5 pb-0`}>
        <a class="navbar-brand  font-weight-bolder" href="#">FISHNANCE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-auto align-items-end">
            <li class="nav-item active mx-3">
              <a class="nav-link pb-0" href="#">Aprender <span class="sr-only ">(current)</span></a>
            </li>
            <li class="nav-item active mx-3">
              <a class="nav-link pb-0" href="#">Artículos</a>
            </li>
            <li class="nav-item active mx-3">
              <a class="nav-link pb-0" href="#">Comunidad</a>
            </li>
            
          </ul>
          <div class="nav-item py-2">
            <NavbarList userName="Alberto Maturano" themeNumber="2" levelNumber="2"/>

            </div>
        </div>
      </nav>
)
}


export default Navbar

