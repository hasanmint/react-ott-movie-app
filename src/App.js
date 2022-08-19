import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Footer from './components/Footer/Footer';
import { BeakerIcon } from '@heroicons/react/solid';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
