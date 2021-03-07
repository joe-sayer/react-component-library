import React from "react";
import PropTypes from "prop-types";

import "../../styles/index.css";

const Button = ({ label, onClick, disabled }) => {
  const buttonStyle = {
    border: "none",
    background: "#008CBA",
    color: "white",
    padding: "12px 32px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "800",
    display: "inline-block",
    borderRadius: "6px",
  };

  const disabledButtonStyle = {
    cursor: "not-allowed",
    border: "none",
    background: "#cccccc",
    color: "#9c9c9c",
    padding: "12px 32px",
    textAlign: "center",
    fontSize: "12px",
    display: "inline-block",
    borderRadius: "6px",
  };

  return (
    <>
      {disabled ? (
        <button style={disabledButtonStyle}>{label}</button>
      ) : (
        <button style={buttonStyle} onClick={onClick}>
          {label}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: "Button",
  onClick: () => {
    console.log("Default onClick handler");
  },
  disabled: false,
};

export default Button;
