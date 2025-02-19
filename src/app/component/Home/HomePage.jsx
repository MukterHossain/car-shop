
import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import HomeContact from './HomeContact';

const HomePage = () => {
    return (
        <div className='px-3'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <HomeContact></HomeContact>
        </div>
    );
};

export default HomePage;