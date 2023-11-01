import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import About from './scenes/About';
import Training from './scenes/Training';
import BPO from './scenes/BPO';
import Test from './components/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/bpo" element ={<BPO/>}/>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
