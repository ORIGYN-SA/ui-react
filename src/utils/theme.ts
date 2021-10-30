import {createGlobalStyle} from "styled-components";

export const theme = {
  colors: {
    BLACK: '#151515',
    VERY_DARK_GREY: '#4a4a4a',
    DARK_GREY: '#6F6F6F',
    MID_GREY: '#AEAEAE',
    LIGHT_GRAY: '#D8D8D8',
    VERY_LIGHTER_GRAY: '#F2F2F2',
    WHITE: '#F2F2F2',

    ERROR: '#E42932',
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
    background-color: #E5E5E5;
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
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
  h1 > strong {
    font-size: 32px;
    line-height: 42px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }
  h4 {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }
  button, .buttonLabel {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .largeText {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
  }
  .smallText {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
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
