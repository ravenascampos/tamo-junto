import Header from "../components/Header";
import { AppProvider } from "../context/AppContext";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
