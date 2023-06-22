import React from 'react';
import styles from './header.css';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SortBlock } from './SortBlock/SortBlock';
import { SearchBlockContainer } from './SearchBlockContainer';

export function Header() {

  return (
    <header className={styles.header}>
      <SearchBlockContainer />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
