import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {PrivateRoute} from './backend/routers/PrivateRoute'
import './App.css';
import { AuthProvider } from './backend/utils/authContext'; 
import GlobalStyle from './GlobalStyle'
import Layout from "./components/layout/Layout";
// Direciones
import LoginAndRegister from './pages/loginAndRegister/LoginAndRegister';
import ChangePassword from './pages/changePassword/ChangePassword';
import Home from "./pages/home/Home";
import { DataProvider } from "./backend/firebase/DataContext";
//conexión principal
function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyle/>
          <DataProvider>
            <Layout>
              <Switch>
                {/* Rutas principales*/}
                  {/* Ruta protegida */}
                <PrivateRoute exact path="/">
                  <Home/>
                </PrivateRoute>
                {/* Rutas disponibles */}
                <Route path="/loginandregister" component={LoginAndRegister}/>
                <Route path="/changePassword" component={ChangePassword}/>
                {/* Error 404 */}
                {/* <Route /> */}
              </Switch>
            </Layout> 
          </DataProvider>
        </Router>
      </AuthProvider> 
    </>
  );
}

export default App;
