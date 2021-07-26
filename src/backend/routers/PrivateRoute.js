import React, {useState}from 'react';

import {Route, Redirect } from 'react-router';
import {authFb} from '../../backend/firebase/config'



export const PrivateRoute = ({component: Component, ...rest}) =>{
    
    const [currentUser] = useState(authFb.currentUser);
    console.log(currentUser)
    
    
    return(
        
        <Route
            {...rest}
            render = {props =>{
                return currentUser ? <Component {...props}/> : <Redirect to='/loginAndRegister'/>
            }}
        />
    )
}

export default PrivateRoute;