import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1><center>Error!</center></h1>
            <h3><center>Page Not Found!</center></h3>
            <img className="error" src="/images/sad.jpg" alt="error face" />
            <center><p>Go to home page <Link to="/">here</Link>.</p></center>
        </>
    );
}

export default NotFound;