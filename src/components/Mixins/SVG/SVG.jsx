import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const SVG = ({path, width, height, fill}) => {
  const [svgAttributes, setSvgAttributes] = useState({});
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    if (!path) return;

    fetch(path)
      .then((rsp) => rsp.text())
      .then((inlineSvg) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(inlineSvg, 'image/svg+xml');
        const svg = doc.querySelector('svg');

        if (svg) {
          const attributes = {};
          for (const attr of svg.attributes) {
            attributes[attr.name] = attr.value;
          }

          if (width) attributes['width'] = width;
          if (height) attributes['height'] = height;

          if (fill) {
            attributes['fill'] = 'currentColor';
          } else {
            delete attributes['fill'];
          }

          setSvgAttributes(attributes);
          setSvgContent(svg.innerHTML);
        }
      })
      .catch((err) => console.error('Error fetching SVG:', err));
  }, [path, width, height, fill]);

  return svgContent ? (
    <svg {...svgAttributes} dangerouslySetInnerHTML={{__html: svgContent}} />
  ) : null;
};

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.bool,
};
