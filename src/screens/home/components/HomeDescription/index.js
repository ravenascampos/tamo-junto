import { Button, Container } from "./homeDescription.styles";
import Link from "../../../../components/Link";
export default function HomeDescription() {
  return (
    <Container>
      <img src="/images/home-1.png" />
      <div className="content">
        <h1>A sua comunidade empreendedora de food service</h1>
        <p>
          Conecte-se a outros empreendedores e participe compartilhando
          jornadas, dúvidas e ideias para que todo mundo prospere #junto
        </p>
        <Link href="#">
          <Button>Saiba mais</Button>
        </Link>
      </div>
    </Container>
  );
}
