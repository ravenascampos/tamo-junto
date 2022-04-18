import { Container, Grid } from "./downloadNow.style";
import Link from "../../../../components/Link";

export default function DownloadNow() {
  return (
    <Container id="downloadNow">
      <h4>
        E aí, você está pronto(a) pra participar e estar #junto com a gente?
      </h4>
      <h5>
        É só baixar o app pela sua loja de aplicativos e se cadastrar pra fazer
        parte da comunidade tamojunto!
      </h5>
      <Grid>
        <Link href="#">
          <img
            className="play-store"
            src="/icons/play-store.svg"
            alt="botão play store"
          />
        </Link>
        <Link href="#">
          <img
            className="apple-store"
            src="/icons/apple-store.svg"
            alt="botão apple store"
          />
        </Link>
      </Grid>
    </Container>
  );
}
