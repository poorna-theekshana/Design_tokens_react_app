import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Button = ({ children, color }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const buttonColor = colors[color] || colors.primary;

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        borderradius: '25px',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        display: 'inline-block',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
