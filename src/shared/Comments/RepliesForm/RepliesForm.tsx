import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './repliesform.css';

interface IRepliesFormProps {
  name?: string;
}

export function RepliesForm(props: IRepliesFormProps) {
  const repliesTextareaRef = useRef<HTMLTextAreaElement>(null)

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   console.log(repliesTextareaRef.current?.value);
  // }

  const [value, setValue] = useState(`${props.name}, `);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  useEffect(() => {
    repliesTextareaRef.current?.focus();

    if (repliesTextareaRef.current) {
      repliesTextareaRef.current.selectionStart = repliesTextareaRef.current.value.length;
      repliesTextareaRef.current.selectionEnd = repliesTextareaRef.current.value.length;
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        ref={repliesTextareaRef}
      // defaultValue={`${props.name}, `}
      />
      <div className={styles.controlsWrapper}>
        <div className={styles.controls}></div>
        <button type='submit' className={styles.button}>Ответить</button>
      </div>
    </form>
  );
}




