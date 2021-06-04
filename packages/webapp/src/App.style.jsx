import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  transition: all 0.5s;
  .App {
    text-align: center;
  }

  .toggle {
    text-align: right;
    padding: 1rem;
  }

  .App-header {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
`;
