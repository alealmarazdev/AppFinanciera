import React from 'react'
import medalla from '../../asset/image/medalla.svg'
import trofeo from '../../asset/image/trofeo.svg'
import profile from '../../asset/image/profile.svg'
import styles from './index.module.css';


function NavbarList(props) {
    const {
      userName,
      themeNumber,
      levelNumber
    } = props;
    return (
    <div className={`${styles.usuarioContainer}  d-flex flex-row`}>
        <aside className={`${styles.usuarioRow} d-flex flex-column `}>
            <section className={`${styles.usuarioName} font-weight-bolder`}>
                {userName}
            </section>
            <section className={`${styles.usuarioName} d-flex flex-row`}>
                 <aside className={`${styles.themeArchivement} d-flex flex-row `}>
                    <div className={`${styles.numberTheme} font-weight-bold d-flex justify-content-end`}>
                        {themeNumber}
                    </div>
                    <div className={`${styles.imgTheme}  d-flex justify-content-center`}>
                    <img src={trofeo} className=""/>
                    </div>
                </aside>
                <aside className={`${styles.levelArchivement} d-flex flex-row `}>
                    <div className={`${styles.numberLevel} font-weight-bold d-flex justify-content-end`}>
                        {levelNumber}
                    </div>
                    <div className={`${styles.imgLevel}  d-flex justify-content-center`}>
                    <img src={medalla} className=""/>
                    </div>
                </aside>
            </section>

        </aside>
        <aside className={`${styles.usuarioRow2}  d-flex justify-content-center `}>
            <img src={profile} className={`${styles.profileImage} rounded-circle w-100`}/>

        </aside> 

    </div>
)
}


export default NavbarList

