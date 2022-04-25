import Header from '../Header2'
import { Banner } from './components/Banner';
import { Process } from './components/Process';

export function AboutPage() {
  const processes = [
    {
      description: 'This is a test process',
    }, {
      description: 'This is the second Process',
      backgroundUrl: './logo192.png'
    }

  ]
  return (
    <>
      <Header />
      <Banner />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non quam lacus. Sagittis id consectetur purus ut faucibus. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Varius quam quisque id diam. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Amet tellus cras adipiscing enim eu turpis egestas pretium.
      </p>
      <Process processes={processes} />
    </>
  );
}

export default AboutPage;