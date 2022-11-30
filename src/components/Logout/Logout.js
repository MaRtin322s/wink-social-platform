import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Logout = () => {
    const { userLogout, auth } = useContext(AuthContext);
    const navigate = useNavigate();

    authService.logoutUser(auth.accessToken)
        .then(() => {
            userLogout();
            navigate('/', { replace: true });
        });
}

export default Logout;