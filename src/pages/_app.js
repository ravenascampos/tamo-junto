import { AppProvider } from "../context/AppContext";
import { GlobalStyle } from "../styles/global";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
