import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles, children }) => {
    const { auth } = useAuth();

    if (!auth?.accessToken) {
        // Redirect to the login page if not authenticated
        return <Redirect to="/login" />;
    }

    const hasRequiredRole = allowedRoles.some((role) =>
        auth?.roles?.includes(role)
    );

    if (hasRequiredRole) {
        // Render the child components if the user has the required role
        return children;
    } else if (auth?.user) {
        // Redirect to the unauthorized page if the user doesn't have the required role
        return <Redirect to="/unauthorized" />;
    } else {
        // Redirect to the login page if the user is not authenticated
        return <Redirect to="/login" />;
    }
};

export default RequireAuth;
