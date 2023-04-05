import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Donation from './routes/Donation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Donation" element={<Donation />} />
      </Routes>
    </>
  );
}
export default App;
