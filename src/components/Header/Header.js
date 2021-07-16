import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ text, fontSize, alignment, underline }) => {
  const containerStyles = {
    textAlign: alignment
  };

  const styles = {
    fontSize: fontSize
  };

  return (
    <div style={containerStyles}>
      <h1 style={styles} className={underline && 'underline'}>
        {text}
      </h1>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  alignment: PropTypes.string,
  underline: PropTypes.bool
};

Header.defaultProps = {
  text: 'Header',
  fontSize: '32px',
  alignment: 'center',
  underline: false
};

export { Header };
