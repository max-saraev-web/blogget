import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';
import {useContext, useEffect, useRef} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const {auth} = useContext(authContext);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []
  );

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log('Данные из textArea', value);
    dispatch(updateComment(''));
  };

  const handleChange = ev => dispatch(updateComment(ev.target.value));

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Text
        As='h3'
        size={14}
        tsize={18}
      >{auth.name}</Text>
      <textarea
        onChange={handleChange}
        value={value} ref={textAreaRef} className={style.textarea}/>
      <button role='submit' className={style.btn}>Отправить</button>
    </form>
  );
};
