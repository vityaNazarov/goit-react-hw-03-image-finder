import React from 'react';

import { ThreeDots } from 'react-loader-spinner';

import styles from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.load_wrapper}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
