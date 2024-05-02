function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

var Image = function Image(_ref) {
  var src = _ref.src,
      sources = _ref.sources,
      width = _ref.width,
      height = _ref.height,
      hasSpacer = _ref.hasSpacer,
      imgAttributes = _ref.imgAttributes,
      isZoomed = _ref.isZoomed,
      fadeDuration = _ref.fadeDuration;
  var createSpacer = width && height && hasSpacer;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: createSpacer ? height / width * 100 + "%" : null
    }
  }, sources && sources.length > 0 ? /*#__PURE__*/React.createElement("picture", null, sources.map(function (source, i) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, source.srcSet && /*#__PURE__*/React.createElement("source", source));
  }), /*#__PURE__*/React.createElement("img", _extends({}, imgAttributes, {
    className: "iiz__img " + (imgAttributes.className || '') + " " + (isZoomed ? 'iiz__img--hidden' : '') + " " + (createSpacer ? 'iiz__img--abs' : ''),
    style: {
      transition: "opacity 0ms linear " + (isZoomed ? fadeDuration : 0) + "ms, visibility 0ms linear " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    width: width,
    height: height
  }))) : /*#__PURE__*/React.createElement("img", _extends({}, imgAttributes, {
    className: "iiz__img " + (imgAttributes.className || '') + " " + (isZoomed ? 'iiz__img--hidden' : '') + " " + (createSpacer ? 'iiz__img--abs' : ''),
    style: {
      transition: "opacity 0ms linear " + (isZoomed ? fadeDuration : 0) + "ms, visibility 0ms linear " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    width: width,
    height: height
  })));
};

Image.propTypes = process.env.NODE_ENV !== "production" ? {
  src: PropTypes.string.isRequired,
  sources: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  hasSpacer: PropTypes.bool,
  imgAttributes: PropTypes.object,
  fadeDuration: PropTypes.number,
  isZoomed: PropTypes.bool
} : {};
export default Image;