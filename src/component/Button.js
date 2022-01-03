import React from "react";

const Button = ({ btnColor, type, btnSize, children, color, onClick }) => {
  const checkBtnClasses = ["btn--primary", "btn--secondary", "btn--outline"];
  const checkBtnSizes = ["btn--medium", "btn--large", "btn--block"];

  return (
    <button
      onClick={onClick}
      style={{ color: color }}
      className={`btn ${
        checkBtnClasses.includes(btnColor) ? btnColor : checkBtnClasses[0]
      } ${checkBtnSizes.includes(btnSize) ? btnSize : checkBtnSizes[0]}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
