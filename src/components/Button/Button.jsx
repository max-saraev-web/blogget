import style from './Button.module.css';

export const Button = ({text}) => {
  const logged = () => {
    console.log('жмяк жмяк');
  };
  return <button onClick={logged} className={style.btn}>{text}</button>;
};
