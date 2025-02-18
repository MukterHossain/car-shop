import Button from '@/app/hooks/Button';
import Image from 'next/image';
import React from 'react';


const About = () => {
    return (
        <div className='my-12'>
            <div className='text-slate-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <div className='w-11/12'>
                        <div className='relative'>
                        <div className='w-[100px] h-[480px] '>
                        <Image  className='rounded-xl' src={'/assets/images/about_us/person.jpg'}  fill alt='pic'></Image>
                        </div>
                        <div className='w-[327px] absolute -bottom-24 -right-16 h-[332px]  '>
                        <Image className=' bg-white p-3 rounded-xl'  alt='pic' src={'/assets/images/about_us/parts.jpg'} fill></Image>
                        </div>
                        </div>
                    </div>
                    </div> 
                  <div>
                    <h2>About</h2>
                    <h2>We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Button title={'Discover More'}></Button>
                    </div> 
                </div>

            </div>
        </div>
    );
};

export default About;