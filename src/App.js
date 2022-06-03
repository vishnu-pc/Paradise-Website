import './App.css';
import './components/Common.css';
import LandingPage from './components/landing-page/LandingPage';
import ProductsPage from './components/products-page/ProductsPage';
import { AboutPage } from './components' 
import ContactPage from './components/contact-page/ContactPage';
import Developers from './components/developers';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><LandingPage /></>} />
          <Route path='/products' element={<><ProductsPage /></>} />
          <Route path='/about' element={<><AboutPage /></>} />
          <Route path='/contact' element={<><ContactPage /></>} />
          <Route path='/developers' element={<><Developers /></>} />
          <Route path='/catalogue' element={<><ContactPage /></>} />
          <Route path='/comingsoon' element={<><ContactPage /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
