import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Operation from './components/Operation';
import Benefits from './components/Benefits';
// import Cardapio from './components/Cardapio';
// import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
  return (
    <>
      <FloatingWhatsApp 
      {
        ...{
        phoneNumber: '5511998992034',
        accountName: 'Espaço Cananeia',
        statusMessage: 'Normalmente responde em 1 hora',
        chatMessage: 'Olá! Como podemos te ajudar? :) 🤝',
        placeholder: 'Digite uma mensagem..',
        avatar: 'images/logo.png'}
      } 
      />
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
