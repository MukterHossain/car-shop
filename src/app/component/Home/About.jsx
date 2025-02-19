import Button from '@/app/hooks/Button';
import Image from 'next/image';
import React from 'react';


const About = () => {
    return (
        <div className='mt-16 md:mt-24'>
            <div className='text-slate-900'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-8'>
                  <div>
                    <div className='w-10/12'>
                        <div className='relative'>
                        <div className='w-[432px] h-[470px] '>
                        <Image  className='rounded-xl' src={'/assets/images/about_us/person.jpg'}  fill alt='pic'></Image>
                        </div>
                        <div className='w-[320px] absolute -bottom-24 -right-16 h-[332px] bg-white  rounded-xl p-3'>
                        <Image className='  relative h-full'  alt='pic' width={320} height={332} src={'/assets/images/about_us/parts.jpg'} ></Image>
                        <span className='absolute top-0 left-0 w-full h-full bg-gray-100/10 p-3 '></span>
                        </div>
                        </div>
                    </div>
                    </div> 
                  <div className='w-full '>
                    <h2 className='text-lg sm:text-xl  font-bold text-red-600'>About</h2>
                    <h2 className='text-3xl sm:text-5xl py-3 sm:py-5 w-full sm:max-w-[600px] md:max-w-[400px]  font-bold'>We are qualified & of experience in this field</h2>
                    <p className='text-lg    text-[#868686] py-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-lg    text-[#868686] pb-1'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='my-3'>
                    <Button title={'Discover More'}></Button>
                    </div>
                    </div> 
                </div>

            </div>
        </div>
    );
};

export default About;