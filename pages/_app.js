
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../style/home.css";
import "../style/Nav.css";
import Link from 'next/link'
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp