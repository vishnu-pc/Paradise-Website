import logo from './logo.svg';
import './App.css';
import './components/Common.css';
import Header from './components/Header'
import VideoBackground from './components/VideoBackground'
// import About from './components/About'
import About2 from './components/About2'
import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials2'
import Contact from './components/Contact'
import ProductsPage from './components/products-page/ProductsPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

{/* <Testimonials />  */}
{/* <About /> */}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Header /><VideoBackground /><About2 />
            <Testimonials2 /><Contact /></>} />
          <Route path='/products' element={<><ProductsPage /></>} />
          <Route path='/about' element={<><Header /></>} />
          <Route path='/contact' element={<><Header /></>} />
          <Route path='/catalogue' element={<><Header /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
