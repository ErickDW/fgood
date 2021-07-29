import styled from "styled-components";
import NavLink from "./NavLink";
import {breakpoints as bp} from '../../../GlobalStyle';
import './NavLinksGroup.css';
import  util  from '../../../backend/utils/utilidades'
import { dbFire, authFb} from "../../../backend/firebase/config";

import { useEffect, useState} from "react";

const LinksGroup = styled.div`
  
  flex-direction: column;
  flex-grow: ${p => Number(!p.compact)};
  padding: 24px 0 14px 0;
  
  overflow: hidden;
  overflow-y: auto;
   background-color: rgba(var(--color-secondary-rgb), 0.04);
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  @media(max-width: ${bp.desktop}) {
      flex-grow: 1;
  }
`;



// const links = [
//   {
//     to: "/products",
//     icon: "fas fa-box",
//     label: "Products",
//   },
//   {
//     to: "/orders",
//     icon: "fas fa-clipboard",
//     label: "Customer Orders",
//   },
//   {
//     to: "/subs",
//     icon: "fas fa-redo-alt",
//     label: "Subscriptions",
//   },
//   {
//     image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
//     name: "Burrito de pollo",
//     price: 13.63,
//   },
//   {
//     image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
//     name: "Burrito de pollo",
//     price: 13.63,
//   },
// ];

function NavLinksGroup(props) {
  const db = dbFire;
  const auth = authFb;
  const h = props.std;

  const [data, setData] = useState([])
 
  const dat = async () => {
    
    return await db.collection('cuenta')
    .where('idUsuer', '==', auth.currentUser.uid ).orderBy('fecha','desc')
    .onSnapshot((QuerySnapshot) =>{
        if(QuerySnapshot.empty){
           
        }else{
            setData([]);
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
                setData(f);
                return f;
                
            });
            
        }
    })
    
   }
  
   
  
  
 useEffect( () => {
   if(h){
    console.log("antes", h)
      dat().then(
          e =>{
          props.funesta(Number(!h));
          console.log("ahora", h, data, e)
        }
      );
      
   }else{
      
      console.log("No hago nada")
   }
  
 }, [h, props.funesta, dat, data])


const f = () =>{
  return Object.keys(data).map((l) => (
    <NavLink
      compact={props.compact}
      key={data[l].idc}
      image={data[l].image}
      plato={data[l].name}
      precio={data[l].price}
    />
  ))
}
 

  return (
    !props.std ? 
    <LinksGroup {...props}>
      {f()}
    </LinksGroup> : <LinksGroup {...props}>
      
    </LinksGroup>
  );
}

export default NavLinksGroup;
