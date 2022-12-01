import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthentication } from "./hooks/useAuthentication";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthContext";

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
            <AuthProvider value={{ user }}>
                <BrowserRouter>
                    <Navbar themeState={handleTheme} />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/post/create"
                                element={
                                    user ? (
                                        <CreatePost />
                                    ) : (
                                        <Navigate to={"/login"} />
                                    )
                                }
                            />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/login"
                                element={
                                    !user ? <Login /> : <Navigate to={"/"} />
                                }
                            />
                            <Route
                                path="/login/register"
                                element={
                                    !user ? <Register /> : <Navigate to={"/"} />
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    user ? (
                                        <Dashboard />
                                    ) : (
                                        <Navigate to={"/login"} />
                                    )
                                }
                            />
                        </Routes>
                    </div>
                    <Footer theme={theme} />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
