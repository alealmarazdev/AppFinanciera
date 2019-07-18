import React from 'react';

import styles from './index.module.css';

function ButtonFullWidth (props) {
  const { Title, handleClick } = props;

  return (
    <button className= {`${styles.btn} mt-2 btn btn-block btn-small button`} onClick={handleClick}>{Title}</button>
  )
}

export default ButtonFullWidth;

