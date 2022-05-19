import Header from '../Header'
import Video from './VideoBackground'
import About2 from './About2';
import Projects from './Projects'
import Testimonials2 from './Testimonials2';
import Partners from './TrustedPartners'
import Contact from './Contact'

function LandingPage() {
  return (
    <>
        <Header />
        <Video />
        <About2 />
        <Projects />
        <Testimonials2 />
        {/* <Partners /> */}
        <Contact />
    </>
  );
}

export default LandingPage;