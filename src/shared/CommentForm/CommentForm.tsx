import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
  onBlur: () => void;
  touched: boolean;
  valueError: string;
}

export function CommentForm({ name, value, touched, valueError, onChange, onBlur, onSubmit }: ICommentFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const placeholderRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    textareaRef.current?.addEventListener('focus', () => {
      placeholderRef.current?.classList.add('onFocus')
    })

    textareaRef.current?.focus();

    if (textareaRef.current) {
      textareaRef.current.selectionStart = textareaRef.current.value.length;
      textareaRef.current.selectionEnd = textareaRef.current.value.length;
    }

    textareaRef.current?.addEventListener('blur', () => {
      if (textareaRef.current?.value === '') {
        placeholderRef.current?.classList.remove('onFocus')
      }
    })
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <span className='onFocus outFocus' ref={placeholderRef}>
        {name ? (
          <span><span className={styles.name}>{`${name}, `}</span>
            <span>введите ваш комментарий</span></span>
        ) : (
          <span>Авторизуйтесь, что бы оставить комментарий</span>
        )}
      </span>
      <textarea
        ref={textareaRef}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={valueError ? 'true' : undefined} />
      {touched && valueError && (<div>{valueError}</div>)}

      <div className={styles.controlsWrapper}>
        <div className={styles.controls}></div>
        <button type='submit' className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
