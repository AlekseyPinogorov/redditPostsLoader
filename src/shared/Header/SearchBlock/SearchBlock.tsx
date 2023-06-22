import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

interface ISearchBlockProps {
  iconImg?: string;
  name?: string;
  loading?: boolean;
}

export function SearchBlock({ iconImg, name, loading }: ISearchBlockProps) {
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} loading={loading} />
    </div>
  );
}
