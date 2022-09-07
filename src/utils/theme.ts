import {createGlobalStyle} from "styled-components";

export const theme = {
  colors: {
    BLACK: '#151515',
    DARK_BLACK: '#000000',
    BLACK_DARK: '#242424',
    SECONDARY_TEXT: '#5F5F5F',
    INACTIVE_BG: '#E3E3E3',
    VERY_DARK_GREY: '#4a4a4a',
    DARK_GREY: '#5F5F5F',
    MID_GREY: '#AEAEAE',
    LIGHT_GREY: '#D8D8D8',
    VERY_LIGHT_GREY: '#F2F2F2',
    WHITE: '#FFFFFF',

    ERROR: '#B5010A',
    PROGRESS: '#F2BD00',
    SUCCESS: '#50AA3E',

    ACCENT_COLOR: '#EE9907',
    ACCENT_COLOR_2: '#FFE7BD',

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
    lg: 1440,
  }
};
export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #F5F5F5;
    font-size: 15px;
    line-height: 22px;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  img {
    max-width: 100%;
  }
  .noShrink {
    flex-shrink: 0;
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 112px;
  }
  h1 > strong {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -3px;
  }
  h2 {
    font-weight: 400;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -2.5px;
  }
  h3 {
    font-weight: 400;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -2px;
  }
  h4 {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1px;
  }
  h5 {
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    letter-spacing: -1.5px;
  }
  h6 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
  }
  button, .buttonLabel {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  
  
  @media (min-width: 600px) {
    h1 {
      font-size: 28px;
      line-height: 38px;
    }
    h1 > strong {
      font-size: 40px;
      line-height: 52px;
    }
    h2 {
      font-size: 24px;
      line-height: 36px;
    }
    h3 {
      font-size: 20px;
      line-height: 30px;
    }
    h4 {
      font-size: 17px;
      line-height: 24px;
    }
  }
  
  @media (min-width: 960px) {
    h1 {
      font-size: 32px;
      line-height: 44px;
    }
    h1 > strong {
      font-size: 44px;
      line-height: 58px;
    }
    h2 {
      font-size: 26px;
      line-height: 38px;
    }
  }
  
  @media (min-width: 1280px) {
    h1 {
      font-size: 36px;
      line-height: 48px;
    }
    h1 > strong {
      font-size: 52px;
      line-height: 66px;
    }
    h2 {
      font-size: 30px;
      line-height: 40px;
    }
    h3 {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;
