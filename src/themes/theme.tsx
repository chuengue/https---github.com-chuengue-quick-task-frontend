import { ThemeProvider } from 'styled-components';
import * as React from 'react';

const fontSizes = [8, 16, 24, 32, 40];

const theme = {
  fontSizes,
};

export const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
