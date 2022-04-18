import React from "react";
import Link from "../Link";
import { Container, Wrapper, Nav } from "./footer.style";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Nav>
          <li>
            <Link href={"#"}>
              <a>Política de Privacidade</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Termo de Uso</a>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <a>Contato</a>
            </Link>
          </li>
          <li>
            <Link href={"https://camp.ioasys.com.br/"} target="_blank">
              <a>Ioasys Camp</a>
            </Link>
          </li>
        </Nav>
        <p>
          tamo<span>junto</span> © 2022 tamojunto.app.br
        </p>
      </Wrapper>
    </Container>
  );
}
