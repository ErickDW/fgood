import React from 'react';
import {Route, Redirect } from 'react-router';
import {useAuth} from '../utils/authContext' //Estado del usuario


export const PrivateRoute = ({children, ...rest}) => {
    
    const auth = useAuth(); //Estado del usuario
    
    return <Route {...rest} render={({location}) => {
        //Redirecciona al usiario no logueado al login
        if(auth.user == null) return <p>Check authorization access...</p>
        return auth.user ? children : <Redirect to={{
            pathname: '/loginandregister',
            state: { from: location }
        }} />
    }} />
}


