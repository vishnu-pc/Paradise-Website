import React from 'react';
import Header2 from '../Header2';
import AboutMission from './about-page-mission/about-mission'
import AboutProcess from './about-process-component/about-process';
import AboutFooter from './about-page-footer/about-page-footer';
import Testimonials2 from '../landing-page/Testimonials2';

export function AboutPage() {
    return (<>
                <Header2 />
                <AboutMission />
                <AboutProcess />
                <Testimonials2 />
                <AboutFooter />
            </>
        );
}

export default AboutPage;