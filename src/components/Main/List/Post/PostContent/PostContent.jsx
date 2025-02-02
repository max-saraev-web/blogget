import style from './PostContent.module.css';

export const PostContent = ({title, author}) => {
  console.log(style);
  return (
    <div className={style.content}>
      <h2>
        <a className={style.linkPost} href="#post">{title}</a>
      </h2>
      <a className={style.linkAuthor} href="#author">{author}</a>
    </div>
  );
};
