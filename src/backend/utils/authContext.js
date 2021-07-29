import { createContext, useState, useEffect, useContext } from "react";
import firebase from 'firebase/app'

import {authFb} from '../firebase/config'

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authFb.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await authFb
          .signInWithEmailAndPassword(email, password);
        setUser(user);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };


const loginUserGoogle = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const provaider =  new firebase.auth.GoogleAuthProvider();
        await authFb.signInWithPopup(provaider)
        .then(result =>{
          const { user } = result;
          setUser(user);
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
    return new Promise(async (resolve, reject) => {
      try {
        await authFb.signOut();
        setUser(null);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };

  const register = (email, password, userName) => {
    return new Promise(async (resolve, reject) => {
      try {
          console.log("holiii", email)
          await authFb
          .createUserWithEmailAndPassword(email, password)
          .then(result =>{
            result.user.updateProfile({
              displayName: userName
            })
            const conf = {url: "http://localhost:3000/" }

            //* Enviar Email de verificacion
            result.user.sendEmailVerification(conf).catch( error => { 
              console.error(error);
            }) });
        
        setUser(user);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };
  return (
    <authContext.Provider value={{ user, signIn, signOut, register, loginUserGoogle}}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
