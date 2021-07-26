import React, {useState, useEffect} from 'react';
import {authFb} from '../../backend/firebase/config'
import {toast} from 'react-toastify'
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//css
import './LoginAndRegister.css';
//imagenes
import log from '../../images/headerimage.png';
import register from '../../images/icons/register.svg';




const LoginAndRegister = () =>{
    const [error, setError] = useState('');
    const [anima, setAnima] = useState(false);
    //const [login] = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUsername] = useState('');
    const history = useHistory();

    const container = document.querySelector(".container");

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
    console.log("Help")
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('The passwords do not match', 4000);
    }else{
      if (email.length > 0 && password.length > 0 && userName.length > 0) {
        if(password.length > 6){
            
            authFb.createUserWithEmailAndPassword(email, password)
            .then(result =>{
              result.user.updateProfile({
                displayName: userName
              })
              const conf = {url: "http://localhost:3000/" }

              //* Enviar Email de verificacion
              result.user.sendEmailVerification(conf).catch( error => { 
                console.error(error);
                toast.error(error.message);
              }) 
              authFb.signOut();
              toast.info(`Hola ${userName}, parece que todo salió bien, se ha enviado un link de verificación a tu correo: ${email}`, 15 * 1000)
              toast.success("Registro exitoso", 3000);
              history.push('/loginandregister');
              setAnima(false);
            }) // * Aqui autentifico
            .catch( e => {
              setError(e);
              console.log("Error: ", e, error);
            })
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

  const handleSubmitLogin = async e =>{
    e.preventDefault();

    try{
      if (email.length > 0 && password.length > 0) {
          authFb.signInWithEmailAndPassword(email, password)
          .then(result => {
              try{
                  if(result.user.emailVerified){
                    
                      toast.success(`Bienvenido ${result.user.displayName}`, 2 * 1000);
                  } else{
                      authFb.signOut().catch(result => {console.log(result)})
                      toast.warn(`Se requiere verificación de correo`, 2 * 1000);
                  }
              }catch(e){
                  console.log("Error inesperado", e);
              }
              history.push("/");
          })
          .catch( () => {
              toast.error(`Correo o contraseña no validos, por favor verificar`, 1 * 1000);
          })

      } else {
         
      }
  }catch (e){
      console.log("Ocurrio un error", e);
  }
    
  }

  const handleUsername = e => setUsername(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleConfirmPassword = e => setConfirmPassword(e.target.value);
  
  

    return(
        <>
          <div className={"container"}>
            <div className="forms-container">
              <div className="signin-signup">
                <form action="#" className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="email" placeholder="Email" onChange={handleEmail}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" onChange={handlePassword}/>
                  </div>
                  <input type="button" value="Login" className="btn solid" onClick={handleSubmitLogin}/>
                  <p className="social-text">Or Sign in with social platforms</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
                <form action="#" className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" onChange={handleUsername}/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" onChange={handleEmail}/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" onChange={handlePassword}/>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirm password" onChange={handleConfirmPassword}/>
                  </div>
                  <input type={"button"} className="btn" value="Sign up" onClick={handleSubmitRegister}/>
                  <p className="social-text">Or Sign up with social platforms</p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>New here ?</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                  </p>
                  <button className="btn transparent" id="sign-up-btn" onClick={e =>{
                      e.preventDefault();
                      setAnima(true)
                  }}>
                    Sign up
                  </button>
                </div>
                <img src={log} className="image" alt="" />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>One of us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                  </p>
                  <button className="btn transparent" id="sign-in-btn" onClick={e =>{
                      e.preventDefault();
                      setAnima(false)
                  }}>
                    Sign in
                  </button>
                </div>
                <img src={register} className="image" alt="" />
              </div>
            </div>
          </div>
        </>
    )
}

export default LoginAndRegister;