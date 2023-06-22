import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { Route, Routes } from 'react-router-dom';
import { Post } from '../Post';
import { NoFound } from '../NoFound';
import { observer } from 'mobx-react-lite';
import { IPostsData } from '../../storeMobX/postsData';

interface ICardsListProps {
  token: string;
  postId: string;
  getPost: any;
  postsData: Array<IPostsData>;
  count: number;
  loading: boolean;
  errorLoading: string;
  nextAfter: string;
}

export const CardsList = observer(({
  token,
  postId,
  getPost,
  postsData,
  count,
  loading,
  errorLoading,
  nextAfter,
}: ICardsListProps) => {
  const [currentPostData, setCurrentPostData] = useState<any>({});
  const [isPostId, setisPostId] = useState(false);
  const [currentURI, setcurrentURI] = useState('');

  const isloadMore = (count % 3) === 0;
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token || token === '' || token === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getPost('rising')
      }
    }, {
      rootMargin: '10px'
    })
    if (bottomOfList.current && loading === false && (count === 0 || !isloadMore)) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current && loading === false && (count === 0 || !isloadMore)) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [nextAfter, token])

  useEffect(() => {
    const URI = window.location.pathname.replace('/posts/', '');
    setcurrentURI(URI)
    const checkId = (post: any) => post.id === URI;
    const isPostIdTrue = postsData.some(checkId)
    setisPostId(isPostIdTrue)
  }, [postId])

  useEffect(() => {
    const currentData = () => {
      for (const post of postsData) {
        if (post.id === postId) {
          return post
        }
      }
    }
    const data = currentData();
    setCurrentPostData(data)
  }, [postId])

  function handleClick() {
    getPost('rising')
  }

  return (
    <ul className={styles.cardsList}>
      {postsData[0].id === '' && !loading && isPostId !== false && !errorLoading && token && token !== '' && token !== 'undefined' && (
        <div style={{ textAlign: 'center' }}>
          Нет ни одного поста
        </div>
      )}

      {postsData[0].id === '' && !loading && isPostId !== false && !errorLoading && (!token || token === '' || token === 'undefined') && (
        <div style={{ textAlign: 'center' }}>
          Авторизуйтесь для загрузки постов
        </div>
      )}

      {postsData[0].id !== '' && (postsData.map((post: any) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          datePostUtc={post.datePostUtc}
          previewImg={post.previewImg}
          avatar={post.avatar}
          rating={post.rating}
        />
      )))}

      {(currentURI === '' || isPostId !== false) && (
        <div ref={bottomOfList} />
      )}

      {loading && (
        <div style={{ textAlign: 'center' }}>
          Загрузка...
        </div>)}

      {isloadMore && count !== 0 && !loading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleClick} className={styles.btnMore}>Загрузить еще</button>
        </div>
      )}

      {errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}

      {postId && isPostId === true && (
        <Routes>
          <Route path={`/${postId}`} element={<Post data={currentPostData} id={postId} />} />
        </Routes>
      )}

      {isPostId === false && currentURI !== '' && loading === false && (
        <Routes>
          <Route path='/*' element={<NoFound />} />
        </Routes>
      )}
    </ul>
  )
})