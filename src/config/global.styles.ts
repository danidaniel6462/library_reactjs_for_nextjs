import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Thin.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  * {
    font-family: "Poppins";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
