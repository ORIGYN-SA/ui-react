import { theme, GlobalStyle } from "./theme";

const numberWithCommas = (number: number, separator = ",") => {
  // Split float on "."
  const numbers = number.toString().split(".");

  // TODO: consider adding comas to amount >0&<1
  return numbers[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) + (numbers[1] ? `.${numbers[1]}` : "");
}

export {
  theme,
  GlobalStyle,
  numberWithCommas,
}