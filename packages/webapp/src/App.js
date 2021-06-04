import { useState } from "react";
import { Button, Toggle } from "@monorepo2/components";
import { loginFunc } from "@monorepo2/common";
import { themes } from "./theme";
import { ThemeProvider } from "styled-components";
import { Container } from "./App.style";

function App() {
  const [counter, setCounter] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(0);

  return (
    <ThemeProvider theme={themes[isDarkTheme ? "dark" : "light"]}>
      <Container>
        <div className="App">
          <div className="toggle">
            <Toggle
              style={{ marginBottom: "1rem" }}
              isChecked={isDarkTheme}
              onChange={() => setIsDarkTheme(!isDarkTheme)}
            />
          </div>
          <div className="App-header">
            <div>
              <h2>Counter</h2>
              <p>{counter}</p>

              <div>
                <Button
                  rounded
                  style={{ margin: "1rem" }}
                  onClick={() => {
                    setCounter((prev) => prev + 1);
                  }}
                >
                  Increment
                </Button>
              </div>
              <div>
                <Button bg="secondary" onClick={loginFunc}>
                  Login now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
