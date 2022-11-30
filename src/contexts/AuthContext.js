import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [value, setValue] = useStorage('session', {});
    return (
        <AuthContext.Provider value={{ storage: { value, setValue } } }>
            {children}
        </AuthContext.Provider>
    );
} 