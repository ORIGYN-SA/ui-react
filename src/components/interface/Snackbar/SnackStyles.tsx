import styled from "styled-components";
export const Styles = styled.div`
  width: auto;
  margin:8px;
  .snackbar {
    width:fit-content;
    max-width: width: 404px;
    height: auto;
    padding: 12px 16px 12px 16px;
    background-color: #151515;
    box-shadow: 0px 1px 12px rgba(18, 18, 18, 0.04), 0px 0px 4px rgba(18, 18, 18, 0.08);
    border-radius: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.15px;  
    color: #FEFEFE;
  }
  svg {
    fill: #fff;
    width:15px;
    height:15px;
    viewBox: 0 0 15 15;
  }
  .svgBox{
    margin-right: 10px;
    padding-top: 2px;
  }
  .container{
    display:flex;
  }
  .container-block{
    display:block;
    text-align: justify;
  }
  
  button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.1px;
    color: #FEFEFE;
    padding:0px;
    margin-left:28px;
    padding-top:2px;
    &:hover {
      background-color: #151515;
    }
  }
  .button-right{
    margin-right: 0px;
    margin-left: auto;
    margin-top:14px;
  }
  a {
    text-decoration: underline;
    font-weight: 600;
    color: #fff;
    
    &:hover {
      text-decoration: none;
    }
  p {
    line-height: 22px;
    text-align: justify;
  }
  }
`;