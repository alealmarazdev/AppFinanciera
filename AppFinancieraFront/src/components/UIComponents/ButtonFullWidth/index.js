import React from 'react';

import styles from './index.module.css';

function ButtonFullWidth (props) {
  const {
    Title,
  } = props;
  return (
    <button className= {`${styles.btn} mt-2 btn btn-small button`}>{Title}</button>
  )
}
export default ButtonFullWidth;

