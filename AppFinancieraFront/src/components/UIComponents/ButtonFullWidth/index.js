import React from 'react';

import styles from './index.module.css';

function ButtonFullWidth (props) {
  const {
    Title,
  } = props;
  return (
    <button className= {`${styles.btn} mt-5 btn btn-lg btn-block button`}>{Title}</button>
  )
}
export default ButtonFullWidth;

