import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const history = useHistory();

    const logout = async () => {
        // If used in more components, this should be in context
        // Axios to /logout endpoint
        setAuth({});
        history.push('/linkpage');
    };

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    );
};

export default Home;
