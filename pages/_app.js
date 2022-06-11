import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";


import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider  } from "@web3-react/core";
import TopNav from "../components/TopNav";

const getLibrary = async (provider) => {
  return new Web3Provider(provider)
}

function MyApp({ Component, pageProps }) {
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <TopNav />
        <Component {...pageProps} />
      </Web3ReactProvider >
  );
}

export default MyApp;
