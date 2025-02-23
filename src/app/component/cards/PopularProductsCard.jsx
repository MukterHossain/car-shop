import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const PopularProductsCard = ({item}) => {
   const { title, description, price, img } = item || {};
     return (
       <div className="flex flex-col max-w-lg p-6 space-y-2 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
         <div>
           <Image className="rounded-lg" height={500} width={500} src={img} alt={title}></Image>
           <h2 className=" text-2xl font-bold pt-5">
             {title}
           </h2>
         </div>
         <div className="flex items-center justify-between">
           <p className="text-xl text-red-600 font-semibold">Price: ${price}</p>
           <button aria-label="Bookmark this post" type="button" className=" text-red-600">
          <FiArrowRight size={25}></FiArrowRight>
           </button>
         </div>
       </div>
     );
   };

export default PopularProductsCard;