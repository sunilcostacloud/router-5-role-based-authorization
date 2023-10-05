import React from 'react';
import { useHistory } from 'react-router-dom';

const Unauthorized = () => {
    const history = useHistory();

    const goBack = () => history.goBack();

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    );
};

export default Unauthorized;
