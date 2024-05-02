import React, { useState } from "react";
import { useMemo, useRef } from "react";
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
export const Zoom = (props) => {
    var _a;
    const { className, height, borderpixel, bordercolor, maxwidth, width, repeat, position, size, bgsize, cursor, imagesrc } = useMemo(() => (Object.assign(Object.assign({}, DEFAULT), props)), [props]);
    const customstlyes = (_a = props.style) !== null && _a !== void 0 ? _a : null;
    const divref = useRef();
    const [isHovering, setIsHovering] = useState(false);
    const [pos, setPos] = useState("");
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
    return React.createElement("div", { ref: divref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseOut, onMouseMove: handleMouseMove, className: className, style: Object.assign(Object.assign({}, styles), customstlyes) });
};
//# sourceMappingURL=index.js.map