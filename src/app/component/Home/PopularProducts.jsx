import Heading from "@/app/hooks/Heading";
import PopularProductsCard from "../cards/PopularProductsCard";
import {services} from '../lib/services'


const PopularProducts = () => {
    return (
        <div className="my-16 md:my-24">
            <Heading title={'Browse Our Products'} subtitle={'Popular Products'} des={'the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '}></Heading>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-between my-10'>
                {services.map((item, i) => (<PopularProductsCard item={item} key={i}></PopularProductsCard>))}
            </div>
        </div>
    );
};

export default PopularProducts;