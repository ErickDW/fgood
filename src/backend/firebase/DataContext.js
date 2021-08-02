import React, {createContext, useState, useEffect} from 'react'

//utilidades, (crear fecha)
import  util  from '../utils/utilidades';

//firebase, usuario y contenido de la db
import { dbFire } from "../firebase/config";
import { useAuth } from '../utils/authContext'

export const DataContext = createContext();

export const DataProvider = ({children}) =>{

    const auth = useAuth(); //Usuario
    const db = dbFire; //db firestore
    const [data, setData] = useState([]); //arreglo de datos
    const [dataPrice, setDataPrice] = useState(0);


    useEffect(() => {
    
        if(auth.user !== null){
            db.collection('cuenta')
            .where('idUsuer', '==', auth.userID ).orderBy('fecha','desc')
            .onSnapshot((QuerySnapshot) =>{
                if(QuerySnapshot.empty){
                    //si no hay data en la db no hace nada o se puede puner un aviso aquí
                }else{
                    let f = []; //arreglo para almacenar los datos
                    let contador = 1;
                    let pre = 0; //contador de los elementos del arreglo
                    QuerySnapshot.forEach( element =>{
                        let fete = element.data().fecha; //fecha del pedido
                        if(fete === null){
                            fete = '00/00/0000'
                        }else{
                            fete = fete.toDate();
                        }
                        
                        pre += element.data().price;
                        f.push({...element.data(), fecha: new util().obtenerfecha(fete), idCuenta: element.id, idc: contador++});
                    });
                    setDataPrice(pre);
                    setData(f);//Elementos agregados a la data
                    return f;
                }
            })
        }
    }, [auth.user,auth.userID, db])

    return (
        <DataContext.Provider value={{data, setData, dataPrice, setDataPrice}}>
            {children}
        </DataContext.Provider>
    )
}