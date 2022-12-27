import './App.css';
import {Navbar, Header, Features,Download,Subscribe, Faq, Footer} from './Components'

function App() { 
  return (
   <main>
    {/* <header className="header-bg">
      <Navbar></Navbar>
      <Header></Header>
    </header> */}
     <Navbar></Navbar>
      <Header></Header>
    <Features></Features>
    <Download></Download>
    <Subscribe></Subscribe>
    <Faq></Faq>
    <Footer></Footer>

   </main>
  );
}

export default App;
