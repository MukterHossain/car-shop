import Heading from '@/app/hooks/Heading';
import React from 'react';
import ServicesCard from '../cards/ServicesCard';
import {services} from '../lib/services'
import Button from '@/app/hooks/Button';

const Services = () => {
    console.log(services)
    const sevices = [
        {
            title: "Electrical System",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'20.00',
        },
        {
            title: "Engine Diagnostics",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'32.20',
        },
        {
            title: "Auto Car Repair",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'25.50',
        },
        {
            title: "Electrical System",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'20.00',
        },
        {
            title: "Engine Diagnostics",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'32.20',
        },
        {
            title: "Auto Car Repair",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            price:'25.50',
        },
    ]
    return (
        <div className='mt-16 md:mt-24 lg:mt-32'>
            <div>
                <Heading title={'Our Service Area'} subtitle={'Service'} des={'the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '}></Heading>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-between my-10'>
                {sevices.map((item, i) => (<ServicesCard key={i} item={item}></ServicesCard>))}
            </div>
            <div className='flex justify-center mb-6'>
                <Button title={'More Services'}></Button>
            </div>
        </div>
    );
};

export default Services;
