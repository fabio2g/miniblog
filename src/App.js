import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./Home/Home";

function App() {
    const [theme, setTheme] = useState(true);

    const handleTheme = ({ theme }) => {
        setTheme(theme);
    };

    return (
        <div className={theme ? "App" : "App dark"}>
            <BrowserRouter>
                <Navbar themeState={handleTheme} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer theme={theme} />
            </BrowserRouter>
        </div>
    );
}

export default App;
