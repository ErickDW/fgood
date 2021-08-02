import React, {createContext, useState, useEffect} from 'react'

//
import  util  from '../utils/utilidades';
import { dbFire } from "../firebase/config";
import { useAuth } from '../utils/authContext'

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const auth = useAuth();
    const db = dbFire;
    const [data, setData] = useState([]);


useEffect(() => {
   
    if(auth.user !== null){
        db.collection('cuenta')
        .where('idUsuer', '==', auth.userID ).orderBy('fecha','desc')
        .onSnapshot((QuerySnapshot) =>{
            if(QuerySnapshot.empty){
                
            }else{
                let f = [];
                let contador = 1;
                QuerySnapshot.forEach( element =>{
                    let fete = element.data().fecha;
                    if(fete === null){
                        fete = '00/00/0000'
                    }else{
                        fete = fete.toDate();
                    }
                    f.push({...element.data(), fecha: new util().obtenerfecha(fete), idCuenta: element.id, idc: contador++});
                });
                setData(f);
                return f;
            }
        })
    }
}, [auth.user,auth.userID, db])

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}