import React from 'react';
import { createPortal } from 'react-dom';
import styles from './predictionsModal.module.css';

interface IpredictionsModal {
  data: any;
  close: any;
}

const PredictionsModal: React.FC<IpredictionsModal> = ({ data, close }) => {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) return null;

  const timeout = setTimeout(() => {
    close();
    clearTimeout(timeout);
  }, 30000);

  return createPortal(
    <div
      style={{ top: `${data.y}px`, left: `${data.x - 250}px` }}
      className={styles.modal}
    >
      {data.name || data.home || data.draw || data.away ? (
        <>
          <p>{data.name}</p>
          <p>1: {data.home}</p>
          <p>X: {data.draw}</p>
          <p>2: {data.away}</p>
        </>
      ) : (
        <p>No data</p>
      )}
      <button onClick={() => close()}>close</button>
    </div>,
    portalRoot
  );
};

export default PredictionsModal;
