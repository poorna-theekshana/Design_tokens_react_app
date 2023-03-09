import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Button = ({ children, color }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const buttonColor = colors[color] || colors.primary;

  return (
    <button style={{ backgroundColor: buttonColor }}>
      {children}
    </button>
  );
};

export default Button;
