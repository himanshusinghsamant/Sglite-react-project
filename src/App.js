import './App.css';
// import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
// import Modal from './components/Modal';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
   <BrowserRouter>
    <div className="App">
      {/* <Modal/> */}
    <Header/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about-us' element={<AboutUs/>} />
      <Route exact path='/products' element={<Products/>} />
      <Route exact path='/contact-us' element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;
