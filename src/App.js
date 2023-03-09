import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import Button from './Button';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

