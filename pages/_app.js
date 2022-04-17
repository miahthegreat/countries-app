import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mt-28">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
