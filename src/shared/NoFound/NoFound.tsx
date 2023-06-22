import React from 'react';
import styles from './nofound.css';
import { EColor, Text } from '../Text';

export function NoFound() {
  return (
    <div className={styles.noFound}>
      <Text As='div' size={36} color={EColor.black} bold={true}>404 — страница не найдена</Text>
    </div>
  );
}
