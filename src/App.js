import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthentication } from "./hooks/useAuthentication";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
    const [user, setUser] = useState(undefined);
    const [theme, setTheme] = useState(true);

    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    /**
     * Verifica se o estado de autenticação foi alterado.
     * Caso houver uma nova autenticação, um novo usuária é definido.
     */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    const handleTheme = ({ theme }) => {
        setTheme(theme);
    };
    
    if (loadingUser) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={theme ? "App" : "App dark"}>
            <BrowserRouter>
                <Navbar themeState={handleTheme} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/create" element={<CreatePost />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/login/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
                <Footer theme={theme} />
            </BrowserRouter>
        </div>
    );
}

export default App;
