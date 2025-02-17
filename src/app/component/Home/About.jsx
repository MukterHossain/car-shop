import Image from 'next/image';
import React from 'react';


const About = () => {
    return (
        <div className='my-12'>
            <div className='text-slate-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <div className='relative'>
                        <Image src={'/assets/images/about_us/person.jpg'} width={500} height={500}></Image>
                        <Image className='absolute -bottom-8 right-0' src={'/assets/images/about_us/parts.jpg'} width={250} height={300}></Image>
                    </div>
                    </div> 
                  <div>
                    <h2>About</h2>
                    <h2>We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary hover:bg-gray-200 hover:text-red-600 mr-4">Discover More</button>
                    </div> 
                </div>

            </div>
        </div>
    );
};

export default About;