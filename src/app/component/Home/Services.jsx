import Heading from '@/app/hooks/Heading';
import React from 'react';
import ServicesCard from '../cards/ServicesCard';
import Button from '@/app/hooks/Button';
import { getServices } from '@/services/getServices';



const Services =async () => {
    const {services} = await getServices()
    console.log(services)
    
    return (
        <div className='mt-16 md:mt-24 lg:mt-32 '>
            <div>
                <Heading title={'Our Service Area'} subtitle={'Service'} des={'the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '}></Heading>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-between my-10'>
                {services?.map((item, i) => (<ServicesCard key={i} item={item}></ServicesCard>))}
            </div>
            <div className='flex justify-center mb-6'>
                <Button title={'More Services'}></Button>
            </div>
        </div>
    );
};

export default Services;
