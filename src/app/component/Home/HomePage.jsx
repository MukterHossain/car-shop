
import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import HomeContact from './HomeContact';
import PopularProducts from './PopularProducts';

const HomePage = () => {
    return (
        <div className='px-3'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <HomeContact></HomeContact>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default HomePage;