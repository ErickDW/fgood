import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import {toast} from 'react-toastify'

//Estado de la cuenta
import { useAuth } from '../../backend/utils/authContext';

//css
import './LoginAndRegister.css';

//imagenes
import log from '../../images/headerimage.png';
import register from '../../images/icons/register.svg';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const LoginAndRegister = () =>{

  const history = useHistory();
  const location = useLocation();  
  const [error, setError] = useState(null); //Manejo del error
  const [anima, setAnima] = useState(false); //Control de la animacion entre registro y login
  const container = document.querySelector(".containerF"); //Variable de la animacion
  //Campos de texto 
  const [creds, setCreds] = useState({
    emailAccs: "",
    emailReg: "",
    passwordAccs: "",
    passwordReg: "",
    userName: "",
    confirmPassword: "",
  });

  const auth = useAuth(); //Usuario
  
  useEffect(() => {
    //Si el usuario esta logueado le permite ingresar y lo redirecciona a la page principal
    if(auth.user) history.replace(location.state ? location.state.from : '/');
  }, [auth.user,history,location])
  
  const onChange = (e) => {
    //Manejo del estado de los campos de texto
    setCreds((prevCreds) => ({
      ...prevCreds,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signIn(creds.emailAccs, creds.passwordAccs); //logueo con email y password
    } catch (e) { //Error en el login
      //console.error(e);
      setError(e.message, error);
    }
  }

  const handleLoginGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginUserGoogle(); //Logueo con google
    } catch (e) {
      //console.error(e);
      setError(e.message, error);
    }
  }
  useEffect(() => {
    //Animacion
    if(container){ //¿El contenedor existe?
      if(anima){ //Estado de la animacion, login o registro?
        container.classList.add("sign-up-mode");
      }else{
        container.classList.remove("sign-up-mode");
      }
    }
  }, [anima,container])

  const handleSubmitRegister =  e =>{
    e.preventDefault();
    //las contraseñas deben ser iguales 
    if(creds.passwordReg !== creds.confirmPassword){
      toast.error('The passwords do not match', 4000);
    }else{
      //Debe haber contenido en todos los campos de texto del registro de lo contrario no se hace nada
      if (creds.emailReg.length > 0 && creds.passwordReg.length > 0 && creds.userName.length > 0) {
        //La contraseña debe ser superior a 6 digitos
        if(creds.passwordReg.length > 6){
            auth.register(creds.emailReg, creds.passwordReg, creds.userName) //Registro con correo y contraseña
            setAnima(false); //reset de la animacion
        } else{
          //poner aviso
          toast.info("La contraseña debe ser superior a 6 digitos", 2 * 1000);
        }
      } else {
        //poner aviso
      }
    }
  }
  return(
    <>
      <div className={"containerF"}>
        <div className="formsF-containerF">
          <div className="signin-signup">
            <form action="#" className="sign-in-formF" onSubmit={handleSubmitLogin}>
              <h2 className="titleF">Sign in</h2>
              <div className="input-fieldF">
                <i className="fas fa-user"></i>
                <input type="email"
                  value={creds.emailAccs}
                  onChange={onChange}
                  name="emailAccs"
                  id="emailAccs"
                  placeholder="Email"
                  style={{height: "auto"}}
                />
              </div>
              <div className="input-fieldF">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={creds.passwordAccs}
                  onChange={onChange}
                  name="passwordAccs"
                  id="passwordAccs"
                  placeholder="Password"
                  style={{height: "auto"}} 
                />
              </div>
              <button type={"submit"} className="btnF">Sign in</button>
              <p className="social-textF">Or Sign in with social platforms</p>
              <div className="social-mediaF">
                <a href="/" className="social-iconF" onClick={handleLoginGoogle} >
                  <FontAwesomeIcon icon={faGoogle} />
                
                </a>
                {/* <a href="/" className="social-iconF">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-iconF">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-iconF">
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
              </div>
            </form>
            <form action="#" className="sign-up-formF" onSubmit={handleSubmitRegister}>
              <h2 className="titleF">Sign up</h2>
              <div className="input-fieldF">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  value={creds.userName}
                  onChange={onChange}
                  name="userName"
                  id="userName"
                  placeholder="User name" 
                  style={{height: "auto"}}
                />
              </div>
              <div className="input-fieldF">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  value={creds.emailReg}
                  onChange={onChange}
                  name="emailReg"
                  id="emailReg"
                  placeholder="Email"
                  style={{height: "auto"}} 
                />
              </div>
              <div className="input-fieldF">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={creds.passwordReg}
                  onChange={onChange}
                  name="passwordReg"
                  id="passwordReg"
                  placeholder="Password" 
                  style={{height: "auto"}}
                />
              </div>
              <div className="input-fieldF">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={creds.confirmPassword}
                  onChange={onChange}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password" 
                  style={{height: "auto"}}
                />
              </div>
              <button type={"submit"} className="btnF">Sign Up</button>
              <p className="social-textF">Or Sign up with social platforms</p>
              <div className="social-mediaF">
              <a href="/" className="social-iconF" onClick={handleLoginGoogle} >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-containerF">
          <div className="panelF left-panelF">
            <div className="contentF">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btnF transparentF" id="sign-up-btn" onClick={e =>{
                  e.preventDefault();
                  setAnima(true)
              }}>
                Sign up
              </button>
            </div>
            <img src={log} className="imageF" alt="" />
          </div>
          <div className="panelF right-panelF">
            <div className="contentF">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btnF transparentF" id="sign-in-btn" onClick={e =>{
                  e.preventDefault();
                  setAnima(false)
              }}>
                Sign in
              </button>
            </div>
            <img src={register} className="imageF" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginAndRegister;