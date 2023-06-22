import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';
import { myPostIdStore } from '../../../../../storeMobX/postId';
import { observer } from 'mobx-react-lite';

interface ITitleProps {
  title?: string;
  id?: string;
}

export const Title = observer(({ title, id = '' }: ITitleProps) => {
  function handleClick() {
    myPostIdStore.updatePostId(id)
  }

  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink} onClick={handleClick}>
        {title}
      </Link>
    </h2>
  );
})
