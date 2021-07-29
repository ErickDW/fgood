import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {PrivateRoute} from './backend/routers/PrivateRoute'
import './App.css';
import { AuthProvider } from './backend/utils/authContext'; 
import GlobalStyle from './GlobalStyle'
import Layout from "./components/layout/Layout";
// Direciones
import LoginAndRegister from './pages/loginAndRegister/LoginAndRegister';
import ChangePassword from './pages/changePassword/ChangePassword';
//conexión principal
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyle/>
            <Switch>
              {/* Rutas principales*/}
              <PrivateRoute exact path="/">
                {/* <Home/> */}
                <Layout/>
              </PrivateRoute>

              {/* Ruta protegida */}
              {/* <Route/> */}
              {/* Rutas disponibles */}
            
              <Route path="/loginandregister" component={LoginAndRegister}/>

              <Route path="/changePassword" component={ChangePassword}/>

              {/* Error 404 */}
              {/* <Route /> */}
            </Switch>
      </Router>
    </AuthProvider> 
      
    </>
  );
}

export default App;
