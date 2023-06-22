import React from 'react';
import styles from './layout.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Outlet />
    </div>
  );
}
