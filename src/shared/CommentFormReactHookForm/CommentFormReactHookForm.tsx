import React, { ChangeEvent } from 'react';
import styles from './commentformreacthookform.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { myCommentFormStore } from '../../storeMobX/commentForm';
import { observer } from 'mobx-react-lite';

type Textarea = {
  commentsInput: string;
}

export const CommentFormReactHookForm = observer(() => {
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<Textarea>();
  const onSubmit: SubmitHandler<Textarea> = () => {
    alert('Форма отправлена');
    setValue('commentsInput', '');
    myCommentFormStore.updateValue(getValues('commentsInput'));
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue('commentsInput', event.target.value);
    myCommentFormStore.updateValue(getValues('commentsInput'));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
      <textarea
        className={styles.input}
        value={myCommentFormStore.value}
        {...register('commentsInput', { required: true, minLength: 4 })}
        onChange={handleChange}
      />
      {errors.commentsInput && <div>Введите больше 3х символов</div>}
      <div className={styles.controlsWrapper}>
        <div className={styles.controls}></div>
        <button type='submit' className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
})
