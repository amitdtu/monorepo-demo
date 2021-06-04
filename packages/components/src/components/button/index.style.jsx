import styled from "styled-components";
import { themes } from "../../theme";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme[props.bg]};
  color: #fff;
  border: none;
  border-radius: ${(props) => (props.rounded ? "2rem" : "8px")};
  cursor: pointer;

  font-size: ${(props) =>
    props.size === "lg" ? "1.25rem" : props.size === "sm" ? "0.75rem" : "1rem"};
  padding: ${(props) =>
    props.size === "lg"
      ? "0.75rem 1.5rem"
      : props.size === "sm"
      ? "0.25rem 0.75rem"
      : "0.5rem 1rem"};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
