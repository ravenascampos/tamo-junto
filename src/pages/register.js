import Head from "next/head";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Head>
        <title>Cadastro | TamoJunto</title>
      </Head>
      <Link href={"/"} passHref>
        <a>Home</a>
      </Link>
    </>
  );
}
