import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
    const { auth } = useContext(AuthContext);
    return (
        <>
            {auth.email
                ? <h5>Hello, {auth.email}</h5>
                : null
            }
            <center><h1>Welcome to</h1></center>
            <img src="./images/wink-home.png" className="images" alt="home logo" />
            <center><h3>Meet people from all over the world!</h3></center>
            <center><p>Create a page for a celebrity, brand or business.</p></center>
        </>
    );
}

export default Home;