import React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = {
  colors: {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    ACCENT_COLOR: '#F5A506',
    MID_GRAY: '#AEAEAE',
    LIGHT_GRAY: '#DFDFDF',
    LIGHTER_GRAY: '#F5F5F5',
    BG_GRAY: '#E5E5E5'
  },
  shadows: {
    sm: "0px 5px 5px -5px rgba(0, 0, 0, 0.1)",
    md: "0px 5px 10px -5px rgba(26, 32, 44, 0.1)",
    lg: "0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)",
  },
  typography: {

  },
  spacing: {

  },
  media: {
    sm: '@media (max-width: 600px)',
    md: '@media (max-width: 960px)',
    lg: '@media (max-width: 1280px)',
    xl: '@media (max-width: 1920px)',
  },
  containers: {
    sm: 905,
    md: 1150,
    lg: 1400,
  }
};
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #E5E5E5;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  h1 {
    font-weight: normal;
    font-size: 52px;
    line-height: 66px;
    margin: 0;
  }
  h2 {
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    margin: 0;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
  }
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
  }
  .noShrink {
    flex-shrink: 0;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
          <Story />
      </Router>
    </ThemeProvider>
  ),
];
