import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CommentForm } from '../CommentForm';
import { observer } from 'mobx-react-lite';
import { myCommentFormStore } from '../../storeMobX/commentForm';
import { myUserDataStore } from '../../storeMobX/userData';

export const CommentFormContainer = observer(() => {
  const { userData: { name } } = myUserDataStore

  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  function validateValue() {
    if (myCommentFormStore.value.length <= 3) return 'Введите больше 3х символов';
    return '';
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);

    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;

    alert('Форма отправлена');
    myCommentFormStore.updateValue('')
  };

  function handleBlur() {
    setValueError('');
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    myCommentFormStore.updateValue(event.target.value);
  }

  return (
    <CommentForm
      value={myCommentFormStore.value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      touched={touched}
      valueError={valueError}
      name={name}
    />
  );
})
