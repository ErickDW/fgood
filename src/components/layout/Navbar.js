import styled from "styled-components";
import Logo from "./navbar/Logo";
import { breakpoints as bp } from "../../GlobalStyle";

import NavLinksGroup from "./navbar/NavLinksGroup";
import { useState } from "react";
import Deta from "./navbar/Ddeta";
import DetaPago from "./navbar/DetaPago";
const StyledNav = styled.nav`
  background-color: #F2F2F2;
  width: ${(p) => (p.compact ? "70px" : "var(--navbar-width)")};
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  overflow: hidden;
  &::before {
    content: "";
    background-color: rgba(var(--color-secondary-rgb), 0);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: ${bp.desktop}) {
    position: fixed;
    width: var(--navbar-width);
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(var(--navbar-width) - var(--navbar-width)*2)"},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  
  return (
    <>
      
      <StyledNav compact={compact} {...props}>
        <Logo compact={compact} setclose={props.close} setcompact={setCompact}/>
        <Deta/>
        {/* 
        <Logo compact={compact} setClose={props.close} setCompact={setCompact} setDataXD={props.cardDet} orO={props.otr}/>

        <NavLinksGroup compact={compact} setDataF={props.cardDet}/> */}
        <NavLinksGroup compact={compact} std={props.stado} funesta={props.carddt}/>

        <DetaPago/>
        {/* <NavToggle compact={compact} setCompact={setCompact} /> */}
      </StyledNav>
    </>
  );
}

export default Navbar;
