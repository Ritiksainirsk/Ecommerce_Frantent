import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./componant/layout/Header/header";
import Footer from "./componant/layout/Footer/footer";
import store from "./Store/store";
import { Provider } from "react-redux";
import Products from "./componant/product/products";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
