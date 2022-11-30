import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [value, setValue] = useStorage('session', {});
    const userLogin = (userData) => setValue(userData);
    const userLogout = () => setValue({});
    return (
        <AuthContext.Provider value={{ userLogin, userLogout, auth: value }}>
            {children}
        </AuthContext.Provider>
    );
} 