import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SinglePage from './components/Singlepage/SinglePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/singlepage' element={<SinglePage />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product' element={<Product />} />
   </Routes>
   <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
