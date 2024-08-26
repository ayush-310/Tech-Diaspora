

import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Festival from './pages/Festival/Festival';
import Ocassion from './pages/ocassion/Ocassion';

function App() {
  return (
    <div>
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/about" element={<About />} />
        <Route path="/ocassion" element={<Ocassion />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
