
import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import HomeContact from './HomeContact';
import PopularProducts from './PopularProducts';
import MeetOurTeam from './MeetOurTeam';

const HomePage = () => {
    return (
        <div className='px-3'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <HomeContact></HomeContact>
            <PopularProducts></PopularProducts>
            <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default HomePage;