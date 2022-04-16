import Head from "next/head";
import HomeScreen from "../screens/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TamoJunto</title>
      </Head>
      <HomeScreen />
    </>
  );
}
