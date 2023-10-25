import './App.scss';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import About from './scenes/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<About/>}/>
          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
