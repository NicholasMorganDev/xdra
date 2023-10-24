import './App.scss';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
