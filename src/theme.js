import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000",
  containerBackground: "#424242",
  containerBoxShadow: "0px 12px 15px #313131b9",
  resultBackground: "#212121",
  textOutColor: "#fff",
  buttonNumAndButtonColorText: "#fff",
  buttonNumAndButtonBackground: "#005b4f",
  buttonNumAndButtonBoxShadow: "0 5px #252525",
  buttonNumActiveBackground: "#4f6446 linear-gradient(#4f6446 20%, #263a1e)",
  buttonNumActiveBoxShadow:
    "inset 0 1px #338a3f50, 0 2px #20311a, 0 1px 6px rgba(0, 0, 0, 0.4)",
  buttonActiveBackground: "#005b4f linear-gradient(#005b4f 20%, #132e2b)",
  buttonActiveBoxShadow:
    "inset 0 1px #17880c4d, 0 2px #091615, 0 1px 6px rgba(0, 0, 0, 0.4)",
  buttonNumBackground: "#4f6446",
  btnCAndGetResultBackground: "#005b4f"
};

export const lightTheme = {
  body: "#f7e4be",
  containerBackground: "#fff",
  containerBoxShadow: "0px 12px 32px rgba(0, 0, 0, 0.4)",
  resultBackground: "#eceff1",
  textOutColor: "#000",
  buttonNumAndButtonColorText: "#fff",
  buttonNumAndButtonBackground: "#560027",
  buttonNumAndButtonBoxShadow: "0 5px #252525",
  buttonNumActiveBackground:
    "#8b0000 linear-gradient(rgb(167, 59, 59) 20%, rgb(104, 14, 14))",
  buttonNumActiveBoxShadow:
    "inset 0 1px rgba(250, 7, 7, 0.3), 0 2px rgb(32, 3, 3), 0 1px 6px rgba(0, 0, 0, 0.4)",
  buttonActiveBackground:
    "#880540 linear-gradient(rgb(151, 46, 104) 20%, rgb(75, 4, 43))",
  buttonActiveBoxShadow:
    "inset 0 1px rgba(250, 7, 7, 0.3), 0 2px rgb(32, 3, 3), 0 1px 6px rgba(0, 0, 0, 0.4)",
  buttonNumBackground: "#7f0000",
  btnCAndGetResultBackground: "#560027"
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
  }
  .container {
    background: ${(props) => props.theme.containerBackground};
    box-shadow: ${(props) => props.theme.containerBoxShadow};
  }
  .result { 
    background: ${(props) => props.theme.resultBackground};
  }
  .num,
  .opr,
  .out {
    color: ${(props) => props.theme.textOutColor};
  }
  .button,
  .buttonNum {
    color: ${(props) => props.theme.buttonNumAndButtonColorText};
    background: ${(props) => props.theme.buttonNumAndButtonBackground};
    box-shadow: ${(props) => props.theme.buttonNumAndButtonBoxShadow};
  }
  .buttonNum:active {
    background: ${(props) => props.theme.buttonNumActiveBackground};
    box-shadow: ${(props) => props.theme.buttonNumActiveBoxShadow};
  }
  .button:active {
    background: ${(props) => props.theme.buttonActiveBackground};
    box-shadow: ${(props) => props.theme.buttonActiveBoxShadow};
  }
  .buttonNum {
    background: ${(props) => props.theme.buttonNumBackground};
  }
  .BtnC,
  .getResult {
    background: ${(props) => props.theme.btnCAndGetResultBackground};
  }
 `;
