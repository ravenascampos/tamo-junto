import { useState } from "react";
import Logo from "../Logo";
import Link from "../Link";
import { Container, Navigate } from "./header.style";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <Container>
      <Navigate>
        <Logo />
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link href={"#purpose"}>
              <a className="title-menu">Proposta</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href={"#community"}>
              <a className="title-menu">Comunidade</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href={"#"}>
              <a className="title-menu">Como funciona?</a>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link href={"#downloadNow"}>
              <a className="title-menu">Baixe agora</a>
            </Link>
          </li>
          <Link href={"/register"}>
            <li className="option button-register" onClick={closeMobileMenu}>
              <a className="title-menu">Cadastre-se</a>
            </li>
          </Link>
        </ul>
        <button className="mobile-menu" onClick={handleClick}>
          {click ? (
            <img src="/icons/menu-close.svg" className="close" />
          ) : (
            <img src="/icons/menu-hamburger.svg" />
          )}
        </button>
      </Navigate>
    </Container>
  );
}
