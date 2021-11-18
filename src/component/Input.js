import React from "react";

const Input = ({ placeholder, className }) => {
  return (
    <>
      <input className={className} type="text" placeholder={placeholder} />
    </>
  );
};

export default Input;
