import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const SVG = ({path, width, height, fill, className}) => {
  const [svgAttributes, setSvgAttributes] = useState({});
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    if (!path) return;

    fetch(path)
      .then((rsp) => rsp.text())
      .then((inlineSvg) => {
        const updatedSvg = inlineSvg.replace(/([a-z]+):([a-z]+)/g,
          (match, p1, p2) => p1 + p2.charAt(0).toUpperCase() + p2.slice(1));
        const parser = new DOMParser();
        const doc = parser.parseFromString(updatedSvg, 'image/svg+xml');
        const svg = doc.querySelector('svg');

        if (svg && svg.hasAttribute('style')) {
          const styleValue = svg.getAttribute('style');

          const reactStyleObject =
          styleValue.split(';').reduce((acc, style) => {
            if (style) {
              const [key, value] = style.split(':');
              if (key && value) acc[key.trim()] = value.trim();
            }
            return acc;
          }, {});

          svg.style = reactStyleObject;
          svg.removeAttribute('style');
        }

        if (svg) {
          const attributes = {};
          for (const attr of svg.attributes) {
            attributes[attr.name] = attr.value;
          }

          if (width) attributes['width'] = width;
          if (height) attributes['height'] = height;
          if (className) attributes['className'] = className;

          if (fill) {
            attributes['fill'] = 'currentColor';
          } else {
            delete attributes['fill'];
          }

          setSvgAttributes(attributes);
          setSvgContent(svg.innerHTML);
        }
      })
      .catch((err) => console.error('Что-то пошло не так... :', err));
  }, [path, width, height, fill, className]);

  return svgContent ? (
    <svg {...svgAttributes}
      dangerouslySetInnerHTML={{__html: svgContent}} />
  ) : null;
};

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.bool,
  className: PropTypes.string,
};
