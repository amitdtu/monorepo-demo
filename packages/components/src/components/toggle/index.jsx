import React from "react";
import { StyledToggle } from "./index.style";

export default function Toggle({
  isChecked,
  onChange,
  bg = "primary",
  ...props
}) {
  return (
    <>
      <StyledToggle bg={bg} isChecked={isChecked} {...props}>
        <input type="checkbox" defaultChecked={isChecked} onChange={onChange} />
        <span className="slider"></span>
      </StyledToggle>
    </>
  );
}
