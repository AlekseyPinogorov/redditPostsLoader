import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardProps {
  id: string;
  author?: string;
  title?: string;
  rating?: number;
  avatar?: string;
  previewImg?: string;
  datePostUtc?: number;
  key?: string;
}

export function Card(props: ICardProps) {
  const {
    id,
    author,
    title,
    rating,
    avatar,
    previewImg,
    datePostUtc,
  } = props;

  return (
    <li
      className={styles.card}
      id={id}
      key={id}
    >
      <TextContent author={author} title={title} avatar={avatar} datePostUtc={datePostUtc} id={id} />
      <Preview previewImg={previewImg} />
      <Menu />
      <Controls rating={rating} />
    </li>
  );
}
