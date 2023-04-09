// import logo from './logo.svg';
// import Cardapio from './components/Cardapio';
// import Partnership from './components/Partnership';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Operation from './components/Operation';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/SharedButtons/FloatingWhatsapp';
import ButtonToTop from './components/SharedButtons/ButtonToTop';

function App() {
  return (
    <>
      <ButtonToTop />
      <FloatingWhatsapp />
      <title>Espaço Cananeia</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Header />
      <Banner />
      <Operation />
      <Benefits />
      {/* <Cardapio /> */}
      {/* <Partnership /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
