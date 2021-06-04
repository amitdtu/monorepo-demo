import styled, { css } from "styled-components";

const mdStyle = css`
  width: 50px;
  height: 25px;

  .slider {
    &::before {
      height: 19px;
      width: 19px;
      bottom: 3px;
      transform: ${(props) => (props.isChecked ? "translateX(23px)" : "0px")};
    }
  }
`;
const smStyle = css`
  width: 34px;
  height: 18px;

  .slider {
    &::before {
      height: 14px;
      width: 14px;
      bottom: 2px;
      left: 2px;
      transform: ${(props) => (props.isChecked ? "translateX(16px)" : "0px")};
    }
  }
`;

export const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: pointer;
    border-radius: 2rem;
    background-color: ${(props) =>
      props.isChecked ? props.theme[props.bg] : "#c9c9c9c9"};
    transition: 0.4s;
    box-shadow: 0 0 1px ${(props) => props.theme[props.bg]};

    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      border-radius: 50%;
      transition: 0.4s;
      background-color: #fff;
      transform: ${(props) => (props.isChecked ? "translateX(36px)" : "0px")};
    }
  }

  ${(props) => (props.size === "md" ? mdStyle : "")}
  ${(props) => (props.size === "sm" ? smStyle : "")} /* ${smStyle} */
`;
