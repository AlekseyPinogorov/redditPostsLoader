import React from 'react';
import styles from './textcontent.css';
import { timeName } from '../../../../utils/js/timeName';
import { Title } from './Title';

interface ITextContentProps {
  author?: string;
  title?: string;
  avatar?: string;
  datePostUtc?: number;
  id?: string;
}

export function TextContent({ author, title, avatar, datePostUtc = 0, id }: ITextContentProps) {
  const createdDate = Math.round((Date.now() - datePostUtc) / 3600000).toString();

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={avatar}
            alt="avatar" />
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликованно </span>
          {createdDate} {timeName(createdDate)}</span>
      </div>
      <Title title={title} id={id} />
    </div>
  );
}
