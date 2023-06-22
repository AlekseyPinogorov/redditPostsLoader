import React, { Component, useEffect, useState } from 'react';
import styles from './comments.css';
import { timeName } from '../../utils/js/timeName';
import { CommmentControl } from './CommmentControl';
import { RepliesForm } from './RepliesForm';
import { Arrow } from './Arrow';
import { EColor, Text } from '../Text';

const Comment = ({ data, isOpen, handleCloseAllModals }: any) => {
  const { id, name, replies, body, datePostUtc } = data;
  const createdDate = Math.round(
    (Date.now() - datePostUtc) / 3600000
  ).toString();

  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => {
    if (!isOpen && isFormOpened) {
      setIsFormOpened(false);
    }
  }, [isOpen])

  if (id && name) {
    return (
      <div className={styles.comment}>
        <Arrow />
        <div className={styles.userWrapper}>
          <img className={styles.avatar} src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png" alt="user`s avatar" />
          <span className={styles.username}>{name}</span>
          <span className={styles.createdAt}>{createdDate} {timeName(createdDate)}</span>
          <span className={styles.descr}>Лига ... </span>
        </div>
        <div className={styles.text}>{body}</div>
        <CommmentControl
          onBtnClick={() => {
            handleCloseAllModals(false);
            setTimeout(() => {
              setIsFormOpened(!isFormOpened);
              handleCloseAllModals(true);
            });
          }}
        />
        {isFormOpened && <RepliesForm name={name} />}
        {replies &&
          replies.map((i: any, n: any) => (
            <Comment
              data={i}
              key={n}
              isOpen={isOpen}
              handleCloseAllModals={handleCloseAllModals}
            />
          ))}
      </div>
    );
  } else return null
}

interface ICommentsProps {
  id: string;
  parentId: string;
  name: string;
  replies: Array<ICommentsProps>;
  body: string;
  datePostUtc: number;
}

interface ICommentsDataProps {
  commentsData: Array<ICommentsProps>
  loading?: boolean
}

export function Comments(props: ICommentsDataProps) {
  const data = props.commentsData

  const [isFormOpened, setIsFormOpened] = useState(false);

  const handleCloseAllModals = (result: boolean) => {
    setIsFormOpened(result);
  }

  function handleData(data: Array<ICommentsProps>) {
    return [...data.map((i: any, n: any) => (
      <Comment
        data={i}
        key={n}
        isOpen={isFormOpened}
        handleCloseAllModals={handleCloseAllModals}
      />))]
  }

  const CommentsArr = handleData(data)

  return (
    <li className={styles.commentsItem}>
      {props.loading ? (
        <div className={styles.commentsEmpty}>
          <Text size={20} color={EColor.grey99}>Загрузка...</Text>
        </div>
      ) : (
        CommentsArr
      )}
    </li>
  )
}
