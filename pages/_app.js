import "../styles/globals.css";
import { AccountContext } from "../context.js";
import { useContext, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState(null);
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <Component {...pageProps} />
    </AccountContext.Provider>
  );
}

export default MyApp;
