import React from 'react';
import Header2 from '../Header2';
import AboutMission from './about-page-mission/about-mission'
import AboutProcess from './about-process-component/about-process';
import AboutFooter from './about-page-footer/about-page-footer';

export function AboutPage() {
    return (<>
                <Header2 />
                <AboutMission />
                <AboutProcess />
                <AboutMission />
                <AboutFooter />
            </>
        );
}

export default AboutPage;