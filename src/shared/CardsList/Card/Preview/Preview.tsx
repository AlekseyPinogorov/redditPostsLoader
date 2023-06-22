import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewImg?: string;
}

export function Preview({ previewImg }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={previewImg}
      />
    </div>
  );
}
