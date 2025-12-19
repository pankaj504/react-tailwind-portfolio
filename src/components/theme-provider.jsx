import { createContext, useEffect } from "react";

const ThemeProviderContext = createContext();

export function ThemeProvider({ children, ...props }) {
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add("dark");
    }, []);

    return (
        <ThemeProviderContext.Provider {...props} value={{ theme: "dark", setTheme: () => { } }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
