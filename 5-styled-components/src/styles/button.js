import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5 all ease-out;
  margin-bottom: 1rem;

  /* & symbol represents the compoent, inside which we are working */
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "#4caf50" : "#fff"};
    color: ${(props) => (props.variant === "outline" ? "#fff" : "#4caf50")};
  }
`;

const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #f6a085 100%);
  border: ${(props) => (props.border === "true" ? "2px solid black" : "none")};
`;

// We can also pass props inside the attrs, and can set type of the component based on the props passed.
// Refer below example
// const SubmitButton = styled(StyledButton).attrs((props)=>{
//   type: ${props => props.value},
// })``;

const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  border: 3px solid blue;
`;

const rotate = keyframes`
    from{
        transform : rotate(0deg)
    }
    to{
        transform : rotate(360deg)
    }
    `;

const AnimatedLogo = styled.div`
  width: 150px;
  height: 150px;
  margin: 2.5rem 0;
  /* Media Queries */
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  background-color: lightgreen;
  animation: ${rotate} infinite 3s linear;
`;

const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.light.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

export { StyledButton, FancyButton, SubmitButton, AnimatedLogo, DarkButton };
