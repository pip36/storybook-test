import React from "react";

const Button = ({ children }) => {
  return (
    <button
      style={{
        background: "white",
        border: "1px solid grey",
        borderRadius: "10px"
      }}
    >
      {children}
    </button>
  );
};

export default Button;
