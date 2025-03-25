import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';
import checkout from './../../../../public/assets/images/checkout/checkout.png'
import Link from 'next/link';

export const metadata = {
    title: 'Service Details',
    description: 'service Details Page'
}

const page =async ({params}) => {
    const details =await getServicesDetails(params.id)
    const {title, description, img, price, facility, _id} = details.service;
    
    return (
        <div className='my-10'>
            <div>
                <div className='relative h-72'>
                <Image className='absolute h-72 w-full left-0 top-0 object-cover' src={img} alt='service' width={1280} height={1000} style={{widows: "90vw"}}></Image>
                <div className='absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r  from-black/80 to-white/30 w-full'>
                    <h2 className='text-white text-3xl font-bold flex justify-center items-center'>
                        detais of {title}
                    </h2>
                </div>
                </div>
                <div className='p-10 bg-gray-100'>
                    <h2 className="text-2xl font-bold text-orange-600">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="my-6">
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                        {facility?.map((item, index) => (
                            <div className='bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl' key={index}> 
                            <h2 className="text-xl font-bold">{item?.name}</h2>
                            <p>{item?.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 bg-gray-100">
                        <Image className='w-full object-cover h-40' src={checkout} width={100} height={100} alt='image'></Image>
                        <div className='flex my-4'>
                            <h2 className="text-xl font-bold">Price: </h2>
                            <p className='text-2xl text-rose-500'> ${price}</p>
                        </div>
                        <Link href={`/checkout/${_id}`}>
                        <button className=' bg-rose-500 px-3 py-2 rounded-lg mt-2 w-full'>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;