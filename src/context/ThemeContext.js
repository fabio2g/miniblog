import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children, value }) {
    return <ThemeContext.Provider value={value}></ThemeContext.Provider>;
}

export function useThemeValue() {
    return useContext(ThemeContext);
}
