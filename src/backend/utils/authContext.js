import { createContext, useState, useEffect, useContext } from "react";
import firebase from 'firebase/app' //Config de firebase para provaider

import {authFb} from '../firebase/config'// autenticacion

const authContext = createContext(); //Creando contexto global

const useAuth = () => {
  return useContext(authContext); //Contexto de la autenticacion
};

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null); //Estado del usuario, logueado o sin loguear
  const [userID, setUserID] = useState(''); //Identificador del usuario

  useEffect(() => {
    //Estado del usuario
    const unsubscribe = authFb.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    //Estado del usuario y ID del Usuario
    const uSub = authFb.onAuthStateChanged((user) => {
      if (user){ 
        setUser(user);
        setUserID(user.uid)
      }
      else setUser('');
    });
    return () => uSub();
  }, []);

  const signIn = (email, password) => {
    //SigIn con Email y contraseña
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await authFb
          .signInWithEmailAndPassword(email, password);
        setUser(user);
        setUserID(user.uid);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };


const loginUserGoogle = () => {
    // sigIn con google
    return new Promise(async (resolve, reject) => {
      try {
        const provaider =  new firebase.auth.GoogleAuthProvider(); //Provider pop up
        await authFb.signInWithPopup(provaider)
        .then(result =>{
          const { user } = result;
          setUser(user);
          setUserID(user.uid)
          resolve(user);
        })
        .catch(result =>{
          reject(result);
        })
       
        
      } catch (e) {
        reject(e);
      }
    })
       
}

  const signOut = () => {
    // Cerrar sesion
    return new Promise(async (resolve, reject) => {
      try {
        await authFb.signOut();
        setUser(null);
        setUserID('');
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };

  const register = (email, password, userName) => {
    // registro con correo y contraseña
    return new Promise(async (resolve, reject) => {
      try {
          await authFb
          .createUserWithEmailAndPassword(email, password)
          .then(result =>{
            result.user.updateProfile({
              displayName: userName
            })
            const conf = {url: "https://e-fgood.web.app/loginandregister" } //Correo de verificacion direccion a la que reenvia

            //* Enviar Email de verificacion
            result.user.sendEmailVerification(conf).catch( error => { 
              console.error(error);
              const { user } = result;
              setUser(user);
              setUserID(user.uid)
              resolve(user);

            }) })
            .catch( e =>{
              resolve(e);

            });
        
        
      } catch (e) {
        reject(e);
      }
    });
  };
  return (
    <authContext.Provider value={{ user, signIn, signOut, register, loginUserGoogle, userID, setUserID}}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
