import React, { useContext, useState } from "react";

const getThemeStyle = (theme = "light") => ({
  backgroundColor: theme === "dark" ? "#000" : "#fff",
  color: theme === "dark" ? "#fff" : "#000",
  borderColor: theme === "dark" ? "#fff" : "#000",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "6px",
  padding: "25px",
});

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => setTheme((s) => (s === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

const Page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme()}>Change theme</button>
      <About theme={theme} />
      <div style={getThemeStyle(theme)}>Some div</div>
      <div style={getThemeStyle(theme)}>Some div</div>
      <div style={getThemeStyle(theme)}>Some div</div>
    </div>
  );
};
const About = () => {
  const { theme } = useTheme();

  return (
    <div style={getThemeStyle(theme)}>
      About
      <Card />
    </div>
  );
};

const Card = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={getThemeStyle(theme)}>
      CARD
      <button onClick={() => setTheme()}>Change theme</button>
    </div>
  );
};

const UseContextHook = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};

export default UseContextHook;
