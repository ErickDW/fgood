import React, {useState, useEffect} from 'react';
//import {authFb} from '../../backend/firebase/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import {toast} from 'react-toastify'
//import { Link } from 'react-router-dom';
import {useHistory, useLocation} from 'react-router-dom';
//css
import './LoginAndRegister.css';
//imagenes
import log from '../../images/headerimage.png';
import register from '../../images/icons/register.svg';
import { useAuth } from '../../backend/utils/authContext';
//import { Field, Button, Message } from "../ui/core";

//import Page from '../ui/Page';

const LoginAndRegister = () =>{
    const [error, setError] = useState(null);
    const [anima, setAnima] = useState(false);
    const container = document.querySelector(".containerF");
    const history = useHistory();
    const location = useLocation();
    const [creds, setCreds] = useState({
      emailAccs: "",
      emailReg: "",
      passwordAccs: "",
      passwordReg: "",
      userName: "",
      confirmPassword: "",
    });
    //const [loading, setLoading] = useState(false);
    const auth = useAuth();
  
    useEffect(() => {
      if(auth.user) history.replace(location.state ? location.state.from : '/');
    }, [auth.user,history,location])
  
    const onChange = (e) => {
      setCreds((prevCreds) => ({
        ...prevCreds,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmitLogin = async (e) => {
      e.preventDefault();
      //setLoading(true);
      try {
          await auth.signIn(creds.emailAccs, creds.passwordAccs);
      } catch (e) {
          console.error(e);
          setError(e.message, error);
          //setLoading(false);
      }
    }
    const handleLoginGoogle = async (e) => {
      e.preventDefault();
      //setLoading(true);
      try {
          await auth.loginUserGoogle();
      } catch (e) {
          console.error(e);
          setError(e.message, error);
          //setLoading(false);
      }
    }
    useEffect(() => {
        if(container){
            if(anima){
            
                container.classList.add("sign-up-mode");
            }else{
                
                container.classList.remove("sign-up-mode");
            }
        }
    }, [anima,container])

  const handleSubmitRegister =  e =>{
    e.preventDefault();
    if(creds.passwordReg !== creds.confirmPassword){
      toast.error('The passwords do not match', 4000);
    }else{
      if (creds.emailReg.length > 0 && creds.passwordReg.length > 0 && creds.userName.length > 0) {
        if(creds.passwordReg.length > 6){
            auth.register(creds.emailReg, creds.passwordReg, creds.userName)
            setAnima(false);
        } else{
            toast.info("La contraseña debe ser superior a 6 digitos", 2 * 1000);
        }
    } else {
        //dispatch(registerError('Something was wrong. Try again'));
        toast.warn(
            ` ¡Ups..! creo que hacen falta algunos datos` , {
             position: "top-right",
             autoClose: 10000,
             closeOnClick: false,
             pauseOnHover: false,
             draggable: true
           })
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