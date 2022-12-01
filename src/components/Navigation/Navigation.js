import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Navigation = () => {
    const { auth } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand">Wink</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active"
                                aria-current="page"
                                to=""
                            >Home</Link>
                        </li>
                        {auth.accessToken
                            ? <>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/user/profile/${auth._id}`}>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/publications/create">Create Publication</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/logout">Logout</Link>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/register">Register</Link>
                                </li>
                            </>
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;