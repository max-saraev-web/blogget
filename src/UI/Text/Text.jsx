import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fweight,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    style[fweight],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return <As
    className={classes}
    onClick={onClick}
    href={href}>
    {children}
  </As>;
};

Text.propTypes = {
  As: PropTypes.string,
  center: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  tsize: PropTypes.string,
  dsize: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  fweight: PropTypes.string,
  onClick: PropTypes.string,
};

