import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import './App.css'
import NotFound from "./components/Not found/NotFound";
import Create from "./components/Create/Create";
import Profile from "./components/Profile/Profile";


function App() {
    return (
        <div>
            <main>
                <header>
                    <Navigation />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/publications/create" element={<Create />} />
                    <Route path="/user/profile" element={<Profile />} />
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/user/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
