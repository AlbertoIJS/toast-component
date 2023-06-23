import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastArray, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.map(toast => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} handleDismiss={() => handleDismiss(toast.id)}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
