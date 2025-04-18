/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
import Footer from '../components/Footer';
import Navbar from '../components/nav/Navbar';

// Globalize CSS
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
