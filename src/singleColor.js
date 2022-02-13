import React, { useState, useEffect } from "react";
import { HiClipboardCopy } from "react-icons/hi";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const cbg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(time);
  });

  return (
    <article
      style={{ backgroundColor: `rgb(${cbg})` }}
      className={index > 10 ? "color color-light" : "color"}
    >
      <HiClipboardCopy
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      ></HiClipboardCopy>
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert ? <p className="alert">Copied to Clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
