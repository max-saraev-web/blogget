import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';
import {useContext, useEffect, useRef, useState} from 'react';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const [areaValue, setAreaValue] = useState('');
  const {auth} = useContext(authContext);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []
  );

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log('Данные из textArea', areaValue);
    setAreaValue('');
  };

  const handleChange = ev => setAreaValue(ev.target.value);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Text
        As='h3'
        size={14}
        tsize={18}
      >{auth.name}</Text>
      <textarea
        onChange={handleChange}
        value={areaValue} ref={textAreaRef} className={style.textarea}/>
      <button role='submit' className={style.btn}>Отправить</button>
    </form>
  );
};
