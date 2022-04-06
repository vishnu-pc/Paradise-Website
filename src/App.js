import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import VideoBackground from './components/VideoBackground'
import About from './components/About'
import Test from './components/Test'
// import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials2'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header /> 
      <VideoBackground />
      <About />
      {/* <Testimonials /> */}
      <Testimonials2 />
      <Contact />
    </div>
  );
}

export default App;
