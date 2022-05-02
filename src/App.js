import './App.css';
import './components/Common.css';
import LandingPage from './components/landing-page/LandingPage';
import ProductsPage from './components/products-page/ProductsPage';
import { AboutPage } from './components' 
import ContactPage from './components/contact-page/ContactPage';
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
          <Route path='/catalogue' element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
