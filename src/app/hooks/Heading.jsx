"use client"
import React from 'react';

const Heading = ({subtitle, title, des}) => {
    return (
        <div className='max-w-3xl mx-auto'>
            <div>
                <h3 className='text-lg sm:text-xl text-center font-bold text-red-600'>{subtitle}</h3>
                <h1 className='text-3xl sm:text-5xl py-3 sm:py-5  text-center font-bold'>{title}</h1>
                <p className='text-lg  text-center  text-[#868686]'>{des}</p>
            </div>
        </div>
    );
};

export default Heading;