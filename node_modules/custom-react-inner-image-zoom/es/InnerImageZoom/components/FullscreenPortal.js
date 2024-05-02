import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

var FullscreenPortal = function FullscreenPortal(_ref) {
  var children = _ref.children;

  var _useState = useState(function () {
    var el = document.createElement('div');
    el.classList.add('iiz__zoom-portal');
    return el;
  }),
      portal = _useState[0];

  useEffect(function () {
    document.body.appendChild(portal);
    return function () {
      return document.body.removeChild(portal);
    };
  }, [portal]);
  return createPortal(children, portal);
};

FullscreenPortal.propTypes = {
  children: PropTypes.element
};
export default FullscreenPortal;