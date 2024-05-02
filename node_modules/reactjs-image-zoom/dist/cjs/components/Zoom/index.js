"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoom = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const DEFAULT = {
    height: 400,
    width: 100,
    maxwidth: 400,
    repeat: "no-repeat",
    position: "center",
    size: 100,
    bgsize: "cover",
    cursor: "zoom-in",
    borderpixel: 1,
    bordercolor: "#ddd",
    imagesrc: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662844267/icons/github/Screenshot_63_ll09rf.png"
};
const Zoom = (props) => {
    var _a;
    const { className, height, borderpixel, bordercolor, maxwidth, width, repeat, position, size, bgsize, cursor, imagesrc } = (0, react_2.useMemo)(() => (Object.assign(Object.assign({}, DEFAULT), props)), [props]);
    const customstlyes = (_a = props.style) !== null && _a !== void 0 ? _a : null;
    const divref = (0, react_2.useRef)();
    const [isHovering, setIsHovering] = (0, react_1.useState)(false);
    const [pos, setPos] = (0, react_1.useState)("");
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPos(`${x}% ${y}%`);
    };
    const handleMouseOut = (e) => {
        divref.current.style.backgroundPosition = "center";
        handleMouseLeave();
    };
    const styles = {
        backgroundImage: `url(${imagesrc})`,
        height: `${height}px`,
        maxWidth: `${maxwidth}px`,
        width: `${width}%`,
        backgroundRepeat: `${repeat}`,
        cursor: `${cursor}`,
        backgroundPosition: isHovering ? `${pos}` : `${position}`,
        backgroundSize: isHovering ? `${size}%` : `${bgsize}`,
        border: isHovering ? `${borderpixel}px solid ${bordercolor}` : ""
    };
    return react_1.default.createElement("div", { ref: divref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseOut, onMouseMove: handleMouseMove, className: className, style: Object.assign(Object.assign({}, styles), customstlyes) });
};
exports.Zoom = Zoom;
//# sourceMappingURL=index.js.map