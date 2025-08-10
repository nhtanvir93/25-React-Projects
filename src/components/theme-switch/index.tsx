import "./style.css";
import useTheme, { Theme } from "./useTheme";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme("light");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme as Theme);
  };

  return (
    <div className="theme-switch-container" data-theme={theme}>
      <h3 className="header">Toggle Theme</h3>
      <button onClick={handleThemeChange} className="toggle-btn" type="button">
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitch;
