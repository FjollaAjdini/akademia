
import { useEffect } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import "../style/home.css";
import "../style/Nav.css";
import "../style/Footer.css";
import "../style/AboutUs/Akademia.css";
import "../style/homepage.css";
import "../style/AboutUs/Akreditimi.css"
import "../style/Regjistrimi/Aplikimi.css"
import "../style/Regjistrimi/Afatet.css"
import "../style/AboutUs/Partneret.css"
import "../style/ShkollaJote/kualifikimet.css"
import "../style/ShkollaJote/Kantina.css"
import "../style/AboutUs/MisioniVizioni.css"
import Link from 'next/link'
import "../style/AboutUs/Akreditimi.css";
import "../style/Regjistrimi/Aplikimi.css";
import "../style/Regjistrimi/Afatet.css";
import "../style/AboutUs/Partneret.css";
import "../style/ShkollaJote/kualifikimet.css";
import "../style/AboutUs/MisioniVizioni.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../style/nav-link.css';
import "../style/ShkollaJote/stafi.css";
import "../style/faq.css";
import "../style/ShkollaJote/Laboratori.css";
import "../style/MeTeRejat/MeTeRejat.css"


function MyApp({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
  }, []);
return (
<>
      <Head>
  <meta charSet="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link rel="preload" href="https://via.placeholder.com/160" as="image"></link>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

  </Head>
<Component {...pageProps} />
</>
);
}
export default MyApp;