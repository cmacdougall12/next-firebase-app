import "../styles/globals.css";
import { GetServerSideProps } from "next";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
