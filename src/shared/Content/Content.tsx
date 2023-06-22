import React from 'react';
import styles from './content.css';
import { Outlet } from 'react-router-dom';

interface IContentProps {
  children?: React.ReactNode;
}

export function Content({ children }: IContentProps) {
  return (
    <main className={styles.content}>
      {children}
      <Outlet />
    </main>
  );
}
