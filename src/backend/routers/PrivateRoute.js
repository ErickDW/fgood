import React from 'react';
import {Route, Redirect } from 'react-router';
import {useAuth} from '../utils/authContext'


export const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuth();
    return <Route {...rest} render={({location}) => {
        if(auth.user == null) return <p>Check authorization access...</p>
        return auth.user ? children : <Redirect to={{
            pathname: '/loginandregister',
            state: { from: location }
        }} />
    }} />
}


