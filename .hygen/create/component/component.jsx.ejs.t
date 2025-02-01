---
to: <%= absPath %>/<%= component_name %>.jsx
---

import style from './<%= component_name %>.module.css';

export const <%= component_name %> = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <p>
        Текст
      </p>
    </div>
  );
};
