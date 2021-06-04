import React from "react";
import { StyledButton } from "./index.style";

export default function Button({
  children,
  bg = "primary",
  size = "md",
  ...props
}) {
  return (
    <StyledButton size={size} bg={bg} {...props}>
      {children}
    </StyledButton>
  );
}
