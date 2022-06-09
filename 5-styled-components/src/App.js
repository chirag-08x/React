import {
  StyledButton,
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./styles/button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  radius: "0.5rem",
};

const GlobalStyle = createGlobalStyle`
    button{
        font-family:"Times New Roman" ;
        /* We can also access theming here. */
        border-radius : ${(props) => props.theme.radius}
    }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        {/* We can pass any know html prop/element to the component. */}
        <StyledButton type="submit">Styled Button</StyledButton>
        <StyledButton variant="outline">Styled Button</StyledButton>
        {/* We can also pass props into the extended style component */}
        <FancyButton border="true">Styled Button</FancyButton>
        {/* We can also pass prop to the compoent whose styles are being extended */}
        <FancyButton variant="outline">Styled Button</FancyButton>
        {/* We can also specify attributes in styled component itself, refer button.js -> SubmitButton */}
        <SubmitButton variant="outline">Styled Button</SubmitButton>
        {/* Animations */}
        <AnimatedLogo />
        {/* Theming button */}
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
};

// Theming = styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep

export default App;
