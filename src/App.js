import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
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
import Post from "./pages/Post/Post";
import Search from "./pages/Search/Search";
import EditPost from "./pages/EditPost/EditPost";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    const [user, setUser] = useState(undefined);
    const [theme, setTheme] = useState(localStorage.getItem("Theme"));

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

    if (loadingUser) {
        return (
            <div className="box_loader">
                <div className="loader"></div>
            </div>
        );
    }

    const handleThemeChange = (theme) => {
        setTheme(localStorage.getItem("Theme"));
    };

    return (
        <div className={theme === "Dark" ? "App dark" : "App"}>
            <AuthProvider value={{ user }}>
                <ThemeProvider value={theme}>
                    <BrowserRouter>
                        <Navbar onThemeChange={handleThemeChange} />
                        <div className="container">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Home theme={theme} />}
                                />
                                <Route
                                    path="/search"
                                    element={<Search theme={theme} />}
                                />
                                <Route path="/post/:id" element={<Post />} />
                                <Route path="/about" element={<About />} />
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
                                <Route
                                    path="/post/edit/:id"
                                    element={
                                        user ? (
                                            <EditPost />
                                        ) : (
                                            <Navigate to={"/login"} />
                                        )
                                    }
                                />
                                <Route
                                    path="/login"
                                    element={
                                        !user ? (
                                            <Login />
                                        ) : (
                                            <Navigate to={"/"} />
                                        )
                                    }
                                />
                                <Route
                                    path="/login/register"
                                    element={
                                        !user ? (
                                            <Register />
                                        ) : (
                                            <Navigate to={"/"} />
                                        )
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
                </ThemeProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
