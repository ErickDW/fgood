import { Switch, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';

import {PrivateRoute} from './backend/routers/PrivateRoute'
import './App.css';


// Direciones
import LoginAndRegister from './pages/loginAndRegister/LoginAndRegister';
import ChangePassword from './pages/changePassword/ChangePassword';
//conexión principal
import Home from './pages/home/Home';
function App() {
  return (
    <>
      {/* Rutas */}
      <HashRouter>
        <Switch>
          {/* Rutas principales*/}
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute exact path="/fgood" rcomponent={Home}/>
          {/* Ruta protegida */}
          {/* <Route/> */}
          {/* Rutas disponibles */}
          
          <Route exact path="/loginAndRegister" component={LoginAndRegister}/>
          <Route exact path="/changePassword" component={ChangePassword}/>
          {/* Error 404 */}
          <Route />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
