import { useContext, useEffect } from "react";
import NavLink from "./NavLink";

//La data de la db
import { DataContext } from "../../../backend/firebase/DataContext";

//Estilos
import styled from "styled-components";
import {breakpoints as bp} from '../../../GlobalStyle';
import './NavLinksGroup.css';

//Estilo de la etiqueta LinksGroup
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


function NavLinksGroup(props) {
  
  const {data} = useContext(DataContext); //Data de la db
  
  useEffect(() => {
  }, [data])

  return (
    <LinksGroup {...props}>
      {Object.keys(data).map((l) => (
        <NavLink
          compact={props.compact}
          key={data[l].idc}
          image={data[l].image}
          plato={data[l].name}
          precio={data[l].price}  
        />
      ))}
    </LinksGroup>
  );
}

export default NavLinksGroup;
