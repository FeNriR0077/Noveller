
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Create from './Create';
import Discover from './Discover';
import Home from './Home';
import Navbar from './Navbar';
import Signin from './Signin';

function App() {
  return (
    <BrowserRouter basename='/Noveller'>
      <div className="maincontainer">
        <Navbar />
        <div className="maincontent">
          <Routes>
            <Route path="/Noveller" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/create" element={<Create />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
