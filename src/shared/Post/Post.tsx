import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsContainer } from '../CommentsContainer';
import { useNavigate } from 'react-router-dom';

interface IPost {
  id: string;
  data: any;
}

export function Post(props: IPost) {
  const navigate = useNavigate()
  const onCLose = {
    onClose: () => {
      navigate("/posts/");
    }
  }

  const [ref] = useOutsideClick(onCLose);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2 style={{ lineHeight: '22px' }} >{props.data.title}</h2>

      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      </div>

      <CommentFormContainer />
      <ul className={styles.commentList}>
        <CommentsContainer id={props.id} />
      </ul>
    </div>
  ), node);
}
